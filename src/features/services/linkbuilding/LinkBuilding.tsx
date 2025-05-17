import React from 'react';
import {LinkbuildingHero} from "@/features/services/linkbuilding/components/Hero";
import {LinkBuildingProblems} from "@/features/services/linkbuilding/components/LinkbuildingProblems";
import {Locations} from "@/features/landing/components";
import {LinkBuildingAuthority} from "@/features/services/linkbuilding/components/LinkbuildingAuthority";

const LinkBuildingComponents = () => {
    return (
        <main className="space-y-44">
            <LinkbuildingHero />
            <section>
                <Locations/>
            </section>
            <section>
                <LinkBuildingProblems />
            </section>
            <section>
                <LinkBuildingAuthority />
            </section>
        </main>
    );
};

export default LinkBuildingComponents;
