import './cgu.css';
import './../../App.css';

import Card from 'react-bootstrap/Card'

function Cgu() {

    return (

        <Card className="w-75 mx-auto my-5 shadow-lg bg-white rounded">
            <Card.Header style={{background: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'}} as="h3">Politiques - CGU</Card.Header>
            <Card.Body>
                <Card.Text className="mt-3 text-justify">
                    <div className="mb-5">
                        <h4 className="mb-3" >Article 1 : Objet</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, magna sed faucibus cursus, lorem ligula venenatis libero, sit amet posuere purus sapien quis turpis. Aliquam efficitur metus mi, eu maximus ipsum convallis sed. Duis interdum condimentum tristique. Sed a laoreet mi, pulvinar consequat sem. Donec maximus turpis blandit cursus dignissim. Aliquam erat volutpat. Ut varius velit ac justo scelerisque, sed feugiat urna vestibulum. Curabitur scelerisque arcu eget sollicitudin laoreet. Suspendisse varius mattis volutpat.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 2 : Mentions légales</h4>
                        <p className="text-justify">Ut sit amet orci ante. Morbi aliquet nibh nisi, eu consequat mi elementum tristique. Fusce vulputate venenatis urna, nec faucibus nisl porttitor at. Aliquam id luctus odio, eget sollicitudin ipsum. In mi massa, viverra nec scelerisque sed, pharetra vel enim. Curabitur vitae ipsum non sapien consectetur fermentum vel eu ligula. Cras suscipit eu metus quis pretium. Proin lectus nisi, tristique pharetra ante quis, semper tempus neque. Nullam suscipit, metus in ultricies blandit, ipsum lacus laoreet nisi, ac pharetra magna elit in tortor. Cras nibh sem, porttitor ac est eget, luctus imperdiet nisi. Vestibulum ut neque sit amet lectus bibendum maximus eget non erat. Pellentesque quis imperdiet velit, a congue augue. Praesent sed faucibus orci. Integer sit amet sapien in lorem scelerisque eleifend eu et erat. Integer in risus id metus interdum dictum sed ac tellus.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 3 : Accès au site</h4>
                        <p className="text-justify">Integer auctor risus non tellus sollicitudin dictum. Aenean nec sem vitae arcu pharetra rutrum. Nullam vitae mi et quam lobortis vehicula. Nullam consequat metus at sem accumsan sollicitudin. Mauris porta risus vitae facilisis scelerisque. Sed tellus massa, accumsan a fermentum vitae, tincidunt vel ante. Aliquam nisi enim, consequat nec ornare eget, vestibulum quis arcu.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 4 : Collecte des données</h4>
                        <p className="text-justify">Aliquam erat volutpat. Duis ac viverra dui. Donec blandit bibendum porttitor. Maecenas congue sed purus vel venenatis. Curabitur faucibus congue libero, vitae venenatis nisl volutpat nec. Curabitur at mauris dignissim, tincidunt est quis, pharetra nibh. Duis dapibus est quis dictum euismod. Cras sodales fringilla urna, in rutrum turpis tempus in. Etiam id maximus felis, at ornare dolor. Curabitur tempor nunc at leo cursus, ac venenatis odio scelerisque. Ut molestie quis nisi sed dignissim. Donec accumsan elit ac euismod rutrum. Pellentesque laoreet sem nunc, eget tempus erat consequat imperdiet. Phasellus accumsan lorem hendrerit, faucibus arcu eget, tincidunt massa.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 5 : Propriété intellectuelle</h4>
                        <p className="text-justify">Donec placerat, sapien sed accumsan egestas, quam elit tempor ligula, id congue purus ante et nisi. Maecenas tempor posuere ante sed semper. Nulla elit orci, volutpat sit amet urna a, volutpat sollicitudin nibh. Duis iaculis tellus non lectus fringilla, ac imperdiet massa hendrerit. Ut eget elementum neque, ut pellentesque risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et enim pretium, hendrerit tortor ac, accumsan enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nisi eget ligula faucibus viverra ac hendrerit eros. Nulla tempor nunc sit amet leo semper congue. Donec egestas mi metus, eget laoreet velit mollis non. Donec vel suscipit tellus. Sed eget nisi tincidunt, ullamcorper est volutpat, rutrum dui.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 6 : Responsabilité</h4>
                        <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 7 : Liens hypertextes</h4>
                        <p className="text-justify">Le site peut être constitué de liens hypertextes. En cliquant sur ces derniers, l’Utilisateur sortira de la plateforme. Cette dernière n’a pas de contrôle et ne peut pas être tenue responsable du contenu des pages web relatives à ces liens.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 8 : Cookies</h4>
                        <p className="text-justify">Lors des visites sur le site, l’installation automatique d’un cookie sur le logiciel de navigation de l’Utilisateur peut survenir.

 Les cookies correspondent à de petits fichiers déposés temporairement sur le disque dur de l’ordinateur de l’Utilisateur. Ces cookies sont nécessaires pour assurer l’accessibilité et la navigation sur le site. Ces fichiers ne comportent pas d’informations personnelles et ne peuvent pas être utilisés pour l’identification d’une personne.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 9 : Publication par l’Utilisateur</h4>
                        <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 10 : Durée du contrat</h4>
                        <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
                    </div>
                    <div className="mb-5">
                        <h4 className="mb-3">Article 11 : Droit applicable et juridiction compétente</h4>
                        <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>

        //         <div class="content py-5  bg-light">
        //             <div class="container">
        //                 <div class="row">
        //                     <div class="col-md-8 offset-md-2">
        //                         {/* <span class="anchor" id="formContact"></span> */}
        //                         <div class="card card-outline-secondary shadow-lg bg-white rounded">
        //                             <div class="card-header">
        //                                 <h3 class="mb-0">Politiques - CGU</h3>
        //                             </div>
        //                             <div class="card-body">
        //                                 <div>
        //                                     <h4>Article 1 : Objet</h4>
        //                                     <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, magna sed faucibus cursus, lorem ligula venenatis libero, sit amet posuere purus sapien quis turpis. Aliquam efficitur metus mi, eu maximus ipsum convallis sed. Duis interdum condimentum tristique. Sed a laoreet mi, pulvinar consequat sem. Donec maximus turpis blandit cursus dignissim. Aliquam erat volutpat. Ut varius velit ac justo scelerisque, sed feugiat urna vestibulum. Curabitur scelerisque arcu eget sollicitudin laoreet. Suspendisse varius mattis volutpat.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 2 : Mentions légales</h4>
        //                                     <p className="text-justify">Ut sit amet orci ante. Morbi aliquet nibh nisi, eu consequat mi elementum tristique. Fusce vulputate venenatis urna, nec faucibus nisl porttitor at. Aliquam id luctus odio, eget sollicitudin ipsum. In mi massa, viverra nec scelerisque sed, pharetra vel enim. Curabitur vitae ipsum non sapien consectetur fermentum vel eu ligula. Cras suscipit eu metus quis pretium. Proin lectus nisi, tristique pharetra ante quis, semper tempus neque. Nullam suscipit, metus in ultricies blandit, ipsum lacus laoreet nisi, ac pharetra magna elit in tortor. Cras nibh sem, porttitor ac est eget, luctus imperdiet nisi. Vestibulum ut neque sit amet lectus bibendum maximus eget non erat. Pellentesque quis imperdiet velit, a congue augue. Praesent sed faucibus orci. Integer sit amet sapien in lorem scelerisque eleifend eu et erat. Integer in risus id metus interdum dictum sed ac tellus.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 3 : Accès au site</h4>
        //                                     <p className="text-justify">Integer auctor risus non tellus sollicitudin dictum. Aenean nec sem vitae arcu pharetra rutrum. Nullam vitae mi et quam lobortis vehicula. Nullam consequat metus at sem accumsan sollicitudin. Mauris porta risus vitae facilisis scelerisque. Sed tellus massa, accumsan a fermentum vitae, tincidunt vel ante. Aliquam nisi enim, consequat nec ornare eget, vestibulum quis arcu.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 4 : Collecte des données</h4>
        //                                     <p className="text-justify">Aliquam erat volutpat. Duis ac viverra dui. Donec blandit bibendum porttitor. Maecenas congue sed purus vel venenatis. Curabitur faucibus congue libero, vitae venenatis nisl volutpat nec. Curabitur at mauris dignissim, tincidunt est quis, pharetra nibh. Duis dapibus est quis dictum euismod. Cras sodales fringilla urna, in rutrum turpis tempus in. Etiam id maximus felis, at ornare dolor. Curabitur tempor nunc at leo cursus, ac venenatis odio scelerisque. Ut molestie quis nisi sed dignissim. Donec accumsan elit ac euismod rutrum. Pellentesque laoreet sem nunc, eget tempus erat consequat imperdiet. Phasellus accumsan lorem hendrerit, faucibus arcu eget, tincidunt massa.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 5 : Propriété intellectuelle</h4>
        //                                     <p className="text-justify">Donec placerat, sapien sed accumsan egestas, quam elit tempor ligula, id congue purus ante et nisi. Maecenas tempor posuere ante sed semper. Nulla elit orci, volutpat sit amet urna a, volutpat sollicitudin nibh. Duis iaculis tellus non lectus fringilla, ac imperdiet massa hendrerit. Ut eget elementum neque, ut pellentesque risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et enim pretium, hendrerit tortor ac, accumsan enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nisi eget ligula faucibus viverra ac hendrerit eros. Nulla tempor nunc sit amet leo semper congue. Donec egestas mi metus, eget laoreet velit mollis non. Donec vel suscipit tellus. Sed eget nisi tincidunt, ullamcorper est volutpat, rutrum dui.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 6 : Responsabilité</h4>
        //                                     <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 7 : Liens hypertextes</h4>
        //                                     <p className="text-justify">Le site peut être constitué de liens hypertextes. En cliquant sur ces derniers, l’Utilisateur sortira de la plateforme. Cette dernière n’a pas de contrôle et ne peut pas être tenue responsable du contenu des pages web relatives à ces liens.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 8 : Cookies</h4>
        //                                     <p className="text-justify">Lors des visites sur le site, l’installation automatique d’un cookie sur le logiciel de navigation de l’Utilisateur peut survenir.

        // Les cookies correspondent à de petits fichiers déposés temporairement sur le disque dur de l’ordinateur de l’Utilisateur. Ces cookies sont nécessaires pour assurer l’accessibilité et la navigation sur le site. Ces fichiers ne comportent pas d’informations personnelles et ne peuvent pas être utilisés pour l’identification d’une personne.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 9 : Publication par l’Utilisateur</h4>
        //                                     <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 10 : Durée du contrat</h4>
        //                                     <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
        //                                 </div>
        //                                 <div>
        //                                     <h4>Article 11 : Droit applicable et juridiction compétente</h4>
        //                                     <p className="text-justify">Aliquam erat volutpat. Nam eu arcu posuere, blandit elit id, gravida eros. Etiam sed euismod nulla. Curabitur vitae eros ut tellus efficitur lacinia. Suspendisse potenti. Nulla cursus mauris a enim mattis, eget ultricies est commodo. Ut faucibus ut massa quis scelerisque. Mauris et erat ac risus consectetur imperdiet eu ac sem. Maecenas pulvinar elementum tellus in facilisis. Suspendisse potenti. Nam sodales tristique ligula, nec tincidunt sapien porttitor eu. Sed risus sapien, interdum et risus et, commodo condimentum lacus.</p>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

    );
}


export default Cgu;