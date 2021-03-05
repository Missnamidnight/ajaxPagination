<?php
include_once("header.php");
include_once("include/config.php");
?>
<div class="container" style="margin-top:50px">
    <div class="row">
        <div class="alert" id="error-msg">

        </div>

        <div class="alert alert-success" id="success-msg">

        </div>
        <br>
        <br>

        <div class="widget widget-table action-table">

            <div class="widget-header"><i class="icon-th-list"></i>
                <h3>Biblioteca</h3>

            </div>
            <!-- /widget-header -->
            <div class="widget-content">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> ID</th>
                        <th> titulo</th>
                        <th> autor</th>
                        <th> descripcion</th>
                        <th> puntuacion</th>
                        <th> genero</th>
                        <th> imagen</th>

                        <th class="td-actions"></th>
                    </tr>
                    </thead>
                    <tbody id="target-content">
                    </tbody>
                </table>

            </div>

            <div id="append-pagination">
            </div>

            <!-- /widget-content -->
        </div>
    </div>
</div>

<!-- Button to trigger modal -->
<?php include_once("footer.php"); ?>