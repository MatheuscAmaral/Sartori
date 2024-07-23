import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";

type Props = {
    url: string;
    text: string;
    name: string;
}


const Email: React.FC<Readonly <Props>> = ({ text, name}) => {
    return (
        <Html lang="pt-br">
            <Container>
                <div className="bg-blue-400 h-64 flex items-center justify-center text-white font-medium text-lg">
                    <Text>Sartori Elétrica</Text>
                    <Text>Enviado por: {name}</Text>
                </div>
                
                <Text> {text} </Text>
            </Container>
        </Html>
    )
};

export default Email;