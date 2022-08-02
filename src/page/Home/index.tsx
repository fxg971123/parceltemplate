import { PureComponent } from "react";
import Logo from 'jsx:./logo.svg';

export class Home extends PureComponent{

    render(){
        return (
            <div className="header">
                <Logo />
                <h1>Hello Eric</h1>
            </div>
        )
    }
}