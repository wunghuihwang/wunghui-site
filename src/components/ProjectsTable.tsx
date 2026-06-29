'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnDef,
    type SortingState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import styles from '../styles/ProjectsTable.module.scss';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface Row {
    project: string;
    company: string;
    period: string;
    ratio: string;
    achievement: string;
}

const COPY = {
    ko: {
        tag: 'PROJECTS — 03',
        heading: '프로젝트 데이터',
        sub: 'ERP에서 했던 작업처럼, 이 표도 정렬·필터링이 됩니다. 헤더를 클릭하거나 검색해보세요.',
        searchLabel: '프로젝트 검색',
        searchPlaceholder: '예: Wooing, Next.js, 카카오맵…',
        colProject: '프로젝트',
        colCompany: '회사',
        colPeriod: '기간',
        colRatio: '담당 비중',
        colAchievement: '핵심 성과',
        countPrefix: '총',
        countSuffix: '개 프로젝트 표시 중',
        empty: '검색 결과가 없습니다.',
    },
    en: {
        tag: 'PROJECTS — 03',
        heading: 'Project data',
        sub: 'Just like the ERP table I built — this one sorts and filters too. Click a header or search.',
        searchLabel: 'Search projects',
        searchPlaceholder: 'e.g. Wooing, Next.js, Kakao Map…',
        colProject: 'Project',
        colCompany: 'Company',
        colPeriod: 'Period',
        colRatio: 'Share',
        colAchievement: 'Key result',
        countPrefix: 'Showing',
        countSuffix: 'projects',
        empty: 'No matching projects.',
    },
} as const;

export default function ProjectsTable() {
    const lang = useUIStore((s) => s.lang);
    const t = COPY[lang];
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState<SortingState>([]);

    const data = useMemo<Row[]>(() => {
        const companies = content[lang].career.companies;
        return companies.flatMap((c) =>
            c.projects.map((p) => ({
                project: p.title,
                company: c.company,
                period: c.period,
                ratio: p.ratio ?? '—',
                achievement: p.achievements[0],
            })),
        );
    }, [lang]);

    const columns = useMemo<ColumnDef<Row>[]>(
        () => [
            { accessorKey: 'project', header: t.colProject },
            { accessorKey: 'company', header: t.colCompany },
            { accessorKey: 'period', header: t.colPeriod },
            { accessorKey: 'ratio', header: t.colRatio },
            { accessorKey: 'achievement', header: t.colAchievement, enableSorting: false },
        ],
        [t],
    );

    const table = useReactTable({
        data,
        columns,
        state: { globalFilter, sorting },
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    const rows = table.getRowModel().rows;

    return (
        <section className={styles.section} id="projects" aria-labelledby="projects-heading">
            <div className={styles.inner}>
                <Reveal>
                    <SectionHeading tag={t.tag} heading={t.heading} sub={t.sub} id="projects-heading" />
                </Reveal>

                <Reveal>
                    <div className={styles.toolbar}>
                        <label htmlFor="project-search" className={styles.searchLabel}>
                            {t.searchLabel}
                        </label>
                        <input
                            id="project-search"
                            type="text"
                            value={globalFilter}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            placeholder={t.searchPlaceholder}
                            className={styles.searchInput}
                        />
                        <p className={styles.count} aria-live="polite">
                            {t.countPrefix} {rows.length} {t.countSuffix}
                        </p>
                    </div>

                    <div className={styles.tableWrap}>
                        <table className={styles.table}>
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            const sortable = header.column.getCanSort();
                                            const sortDir = header.column.getIsSorted();
                                            const ariaSort =
                                                sortDir === 'asc'
                                                    ? 'ascending'
                                                    : sortDir === 'desc'
                                                      ? 'descending'
                                                      : 'none';
                                            return (
                                                <th
                                                    key={header.id}
                                                    scope="col"
                                                    aria-sort={sortable ? ariaSort : undefined}
                                                >
                                                    {sortable ? (
                                                        <button
                                                            type="button"
                                                            className={styles.sortButton}
                                                            onClick={header.column.getToggleSortingHandler()}
                                                        >
                                                            {flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext(),
                                                            )}
                                                            <span aria-hidden="true" className={styles.sortIcon}>
                                                                {sortDir === 'asc'
                                                                    ? '↑'
                                                                    : sortDir === 'desc'
                                                                      ? '↓'
                                                                      : '↕'}
                                                            </span>
                                                        </button>
                                                    ) : (
                                                        flexRender(header.column.columnDef.header, header.getContext())
                                                    )}
                                                </th>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {rows.length === 0 ? (
                                    <tr>
                                        <td colSpan={columns.length} className={styles.empty}>
                                            {t.empty}
                                        </td>
                                    </tr>
                                ) : (
                                    rows.map((row) => (
                                        <tr key={row.id}>
                                            {row.getVisibleCells().map((cell) => (
                                                <td key={cell.id} data-col={cell.column.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
