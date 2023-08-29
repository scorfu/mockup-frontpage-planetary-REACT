import './MainText.css';
import { Link } from 'react-router-dom'

const MainText = () => {

    return (
        <>
            <section className="main__text">
                <div><strong>P</strong>FL package</div>
                <hr />
                <div>
                    <p>Out pack fly live package includes lpsum dolor sit amet, consectetur adipiscing elit. Vivamus ex
                        ante, tristique sed elit id, scelerisque scelerisque risus. Nulla malesuada suscipit vehicula.
                        Vestibulum mauris purus, malesuada eget laoreet et, mattis eu purus. Sed arcu enim, rhoncus non
                        porta eu, finibus sed erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet
                        vitae nisi vel ornare. Cras velit neque, tincidunt et purus eu, semper dignissim risus. Quisque
                        gravida interdum ipsum ac dignissim. Aenean fringilla libero leo, vitae varius magna convallis vel.
                        Morbi luctus ligula erat, vitae pulvinar nunc pretium nec. Integer id facilisis nibh. In porta at
                        tellus eget consectetur. Vestibulum nisl nunc, euismod a aliquet sit amet, fermentum in massa.
                    </p>
                    <p>Nunc quis eros facilisis, sagittis ex vitae, mattis sapien. Duis feugiat dictum vehicula. Nullam
                        vestibulum tellus nisi, eu euismod velit finibus et. Aliquam id risus non sem pulvinar pulvinar in
                        quis tellus. Pellentesque eget ipsum dignissim, molestie est vitae, tincidunt elit. Pellentesque
                        suscipit, magna ac molestie luctus, magna massa placerat purus, in dictum urna dui vel massa.
                        Curabitur eget est felis. Morbi eleifend libero a turpis sollicitudin aliquet.</p>
                    <p>
                        Aliquam id risus non sem pulvinar pulvinar in quis tellus. Pellentesque eget ipsum dignissim,
                        molestie est vitae, tincidunt elit. Pellentesque suscipit, magna ac molestie luctus, magna massa
                        placerat purus, in dictum urna dui vel massa. Curabitur eget est felis. Morbi eleifend libero a
                        turpis sollicitudin aliquet.
                    </p>
                </div>
                <Link to='/destinations' className="checkout__btn">Checkout</Link>
            </section>
        </>
    )
}

export default MainText;