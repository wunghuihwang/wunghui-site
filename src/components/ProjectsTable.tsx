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

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

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
        <section className="mx-auto max-w-site px-6 py-[100px] max-md:px-5 max-md:py-[72px] max-sm:px-4" id="projects" aria-labelledby="projects-heading">
            <div className="min-w-0">
                <Reveal>
                    <SectionHeading tag={t.tag} heading={t.heading} sub={t.sub} id="projects-heading" />
                </Reveal>

                <Reveal>
                    <div className="mb-5 flex min-w-0 flex-wrap items-baseline gap-4 max-sm:flex-col max-sm:items-stretch">
                        <label htmlFor="project-search" className={`${tiny} font-medium text-soft`}>
                            {t.searchLabel}
                        </label>
                        <input
                            id="project-search"
                            type="text"
                            value={globalFilter}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            placeholder={t.searchPlaceholder}
                            className="min-h-11 min-w-[220px] flex-1 rounded border border-strong bg-raised px-3 py-3 font-[inherit] text-[0.92rem] text-ink placeholder:text-soft focus:outline-none max-sm:w-full max-sm:min-w-0"
                            aria-describedby="project-search-hint"
                        />
                        <p className={`${tiny} ml-auto text-mint max-sm:ml-0`} aria-live="polite" id="project-search-hint">
                            {t.countPrefix} {rows.length} {t.countSuffix}
                        </p>
                    </div>

                    <div className="w-full overflow-x-auto rounded-md border border-line [-webkit-overflow-scrolling:touch]">
                        <table
                            className={`w-full min-w-[760px] border-collapse text-[0.9rem] max-sm:min-w-[640px] [&_td]:whitespace-nowrap [&_td]:border-b [&_td]:border-line [&_td]:px-4 [&_td]:py-3.5 [&_td]:text-left [&_td]:align-top max-sm:[&_td]:px-3 max-sm:[&_td]:py-3 [&_th]:whitespace-nowrap [&_th]:border-b [&_th]:border-line [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:align-middle max-sm:[&_th]:px-3 max-sm:[&_th]:py-2.5 [&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:bg-raised [&_thead_th]:font-mono [&_thead_th]:text-[11px] [&_thead_th]:font-semibold [&_thead_th]:uppercase [&_thead_th]:tracking-[0.12em] [&_thead_th]:text-soft [&_tbody_tr:last-child_td]:border-b-0 [&_tbody_tr:hover]:bg-[color-mix(in_srgb,var(--accent-mint)_6%,transparent)] [&_td[data-col='achievement']]:min-w-[240px] [&_td[data-col='achievement']]:whitespace-normal [&_td[data-col='achievement']]:text-soft`}
                            role="table"
                        >
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id} role="row">
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
                                                    role="columnheader"
                                                >
                                                    {sortable ? (
                                                        <button
                                                            type="button"
                                                            className={`${tiny} inline-flex h-6 items-center gap-1.5 rounded-sm p-0 text-soft transition-colors duration-fast hover:text-ink`}
                                                            onClick={header.column.getToggleSortingHandler()}
                                                            aria-label={`${flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext(),
                                                            )} 정렬`}
                                                        >
                                                            {flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext(),
                                                            )}
                                                            <span aria-hidden="true" className="text-[0.8em] opacity-60">
                                                                {sortDir === 'asc'
                                                                    ? '↑'
                                                                    : sortDir === 'desc'
                                                                      ? '↓'
                                                                      : '↕'}
                                                            </span>
                                                        </button>
                                                    ) : (
                                                        <span className={`${tiny} inline-flex h-6 items-center text-soft`}>
                                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                                        </span>
                                                    )}
                                                </th>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {rows.length === 0 ? (
                                    <tr role="row">
                                        <td colSpan={columns.length} className="px-4 py-8 text-center text-soft" role="cell">
                                            {t.empty}
                                        </td>
                                    </tr>
                                ) : (
                                    rows.map((row) => (
                                        <tr key={row.id} role="row">
                                            {row.getVisibleCells().map((cell) => (
                                                <td key={cell.id} data-col={cell.column.id} role="cell">
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
