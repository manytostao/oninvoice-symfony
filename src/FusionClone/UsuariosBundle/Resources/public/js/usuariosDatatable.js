/**
 * Created by manytostao on 25/05/15.
 */
'use strict';

/*
 * show.bs.modal
 * shown.bs.modal
 * hide.bs.modal
 * hidden.bs.modal
 *
 * */
var $usuariosTable = {};


$usuariosTable.postDraw = function () {
    var $tr = $('#usuariosTable').find('tbody tr');
    $tr.each(function () {
        var aData = $('#usuariosTable').dataTable().fnGetData(this);
        var $column = $('<td></td>');
        var $btnGroup = $('<div class="btn-group btn-group-justified" style="text-align: center"></div>');

        //Buttons

        var $btnEditar = $('<a class="edit" title="Editar" href="#">');
        var $innerDiv2 = $('<div class="btn btn-sm btn-default"></div>');
        $innerDiv2.append($('<i class="fa fa-edit"></i>'));
        $btnEditar.append($innerDiv2);
        $btnEditar.attr('data-id', aData != null ? aData[0] : null);
        $btnEditar.attr('data-active', aData != null ? aData[2] : null);
        var $parent2 = $(this).closest('tr');
        var $text2 = $parent2.find('.nom-description');
        $btnEditar.attr('data-name', $text2.html());

        var $btnEliminar = $('<a title="Eliminar" href="#delete" data-toggle="modal"></a>');
        var $innerDiv3 = $('<div class="btn btn-sm btn-default"></div>');
        $innerDiv3.append($('<i class="fa fa-trash-o"></i>'));
        $btnEliminar.append($innerDiv3);
        $btnEliminar.attr('data-toggle', 'modal');
        $btnEliminar.attr('data-target', '#confirm');
        $btnEliminar.attr('data-id', aData != null ? aData[0] : null);

        var $btnEditarPass = $('<a class="edit" title="Reiniciar Contraseña" href="#">');
        var $innerDiv4 = $('<div class="btn btn-sm btn-default"></div>');
        $innerDiv4.append($('<i class="fa fa-lock"></i>'));
        $btnEditarPass.append($innerDiv4);
        $btnEditarPass.attr('data-id', aData != null ? aData[0] : null);
        $btnEditarPass.attr('data-active', aData != null ? aData[2] : null);
        var $parent3 = $(this).closest('tr');
        var $text3 = $parent3.find('.nom-description');
        $btnEditarPass.attr('data-name', $text3.html());

        $btnGroup.append($btnEditar).append($btnEditarPass).append($btnEliminar);
        $column.append($btnGroup);
        $(this).append($column);

        //Events
        //Edit
        $btnEditar.click(function () {
            document.location = Routing.generate('usuarios_edit', {'id': $(this).data('id')});
        });

        //Delete
        $btnEliminar.click(function () {
            var id = $(this).attr('data-id');
            $('#deleteButton').attr('href', Routing.generate('usuarios_delete', {id: id}));
            var $modalView = $('#delete');
            $modalView.modal();
        });

        //EditPass
        $btnEditarPass.click(function () {
            document.location = Routing.generate('usuarios_editPass', {'id': $(this).data('id')});
        });
    });
};
