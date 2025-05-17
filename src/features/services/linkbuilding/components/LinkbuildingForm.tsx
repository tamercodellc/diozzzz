'use client';

import React from 'react';
import { Label, Input, ShimmerButton } from '@/components/ui';
import { cn } from '@/lib/utils';

export function LinkbuildingForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    };
    return (
        <div className="max-w-4xl flex-none sm:max-w-6xl lg:max-w-none">
            <div className="-m-2 rounded-r-xl bg-card/50 backdrop-blur-lg p-2 ring-1 ring-foreground/20 ring-inset lg:-m-4 lg:rounded-r-2xl lg:p-4">
                <div className="shadow-input w-full max-w-3xl bg-card/80 backdrop-blur-sm p-8 rounded-r-md">
                    <h2 className="text-xl font-bold text-foreground">
                        Get My Clients Acquisition Link Building Strategy
                    </h2>
                    <form className="my-8" onSubmit={handleSubmit}>
                        <LabelInputContainer>
                            <Label htmlFor="name" className="mb-2">
                                Your name *
                            </Label>
                            <Input
                                id="name"
                                placeholder="Your name"
                                type="text"
                                required
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mt-4">
                            <Label htmlFor="phone" className="mb-2">
                                Your phone number (optional)
                            </Label>
                            <Input
                                id="phone"
                                placeholder="Your phone number (optional)"
                                type="tel"
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mt-4">
                            <Label htmlFor="email" className="mb-2">
                                Your work e-mail *
                            </Label>
                            <Input
                                id="email"
                                placeholder="Your work e-mail"
                                type="email"
                                required
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mt-4 mb-8">
                            <Label htmlFor="website" className="mb-2">
                                Company website *
                            </Label>
                            <Input
                                id="website"
                                placeholder="Company website"
                                type="url"
                                required
                            />
                        </LabelInputContainer>

                        <ShimmerButton
                            variant="outline"
                            size="big"
                            type="submit"
                            className="w-full"
                        >
                            Let's do it
                            <BottomGradient />
                        </ShimmerButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn('flex w-full flex-col space-y-2', className)}>
            {children}
        </div>
    );
};