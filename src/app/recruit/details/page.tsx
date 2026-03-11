import { RecruitDetailsSection } from "@/components/RecruitDetailsSection";

export default function RecruitDetailsPage() {
    return (
        <main className="min-h-screen bg-paper-cream overflow-x-hidden selection:bg-sage selection:text-white">
            <RecruitDetailsSection />

            {/* Footer */}
            <footer className="py-12 text-center bg-paper-cream hairline-top border-t border-ink-light/30">
                <p className="text-[11px] font-sans uppercase tracking-[0.5em] text-ink-gray/40">
                    Positive Village © 2026 Kikimom
                </p>
            </footer>
        </main>
    );
}
