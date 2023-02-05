import { Chat } from 'phosphor-react';
import * as Popover from '@radix-ui/react-popover';
import { WidgetForm } from '../components/WidgetForm';
import { trpc } from '../../../utils/trcp';

export default function Home() {

        const { data } =trpc.hello.useQuery({
            text: 'World'
        })

    return (
        <div className="h-screen w-screen bg-black flex flex-col gap-4 items-end justify-end p-8">
            <h1 className='text-4xl text-white font-bold'>{data?.greeting}</h1>
            <Popover.Root>
                <Popover.Portal>
                    <Popover.Content align="end" sideoffset={16}>
                        <WigdgetForm />
                    </Popover.Content>
                </Popover.Portal>

                <Popover.Trigger className="bg-violet-500 rounded-full h-12 w- 12 flex item-center justify-center hover:bg-violet-600">
                    <Chat className='text-white h-5 w-5' weight="bold" />
                </Popover.Trigger>
            </Popover.Root>
        </div>
    )
}