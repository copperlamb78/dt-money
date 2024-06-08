import { HeaderContaine, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <div>
            <HeaderContaine>
                <HeaderContent>
                    <img src={logoImg} alt="" />
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewTransactionButton>Nova tranção</NewTransactionButton>
                        </Dialog.Trigger>
                        
                        <NewTransactionModal />
                    </Dialog.Root>
                </HeaderContent>
            </HeaderContaine>
        </div>
    )
}