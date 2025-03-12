# DataGridTemplateColumn Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DataGridTemplateColumn : DataGridColumn
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DataGridTemplateColumn
	Inherits DataGridColumn
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DataGridTemplateColumn = 
    class
        inherit DataGridColumn
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridTemplateColumn.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>  →  DataGridTemplateColumn</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridTemplateColumn__ctor">DataGridTemplateColumn()</a></td>
<td>Initializes a new instance of the DataGridTemplateColumn class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_ActualWidth">ActualWidth</a></td>
<td>Actual visible width after Width, MinWidth, and MaxWidth setting at the Column level and DataGrid level have been taken into account<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_CanUserReorder">CanUserReorder</a></td>
<td>Gets or sets a value that indicates whether the user can change the column display position by dragging the column header.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_CanUserResize">CanUserResize</a></td>
<td>Gets or sets a value that indicates whether the user can adjust the column width using the mouse.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_CanUserSort">CanUserSort</a></td>
<td>Gets or sets a value that indicates whether the user can sort the column by clicking the column header.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridTemplateColumn_CellEditingTemplate">CellEditingTemplate</a></td>
<td>Gets or sets the <a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a> which is used for the editing mode of the current <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a></td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_CellStyleClasses">CellStyleClasses</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridTemplateColumn_CellTemplate">CellTemplate</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_CellTheme">CellTheme</a></td>
<td>Gets or sets the <a href="T_Avalonia_Controls_DataGridColumnHeader">DataGridColumnHeader</a> cell theme.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_ClipboardContentBinding">ClipboardContentBinding</a></td>
<td>The binding that will be used to get or set cell content for the clipboard.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_CustomSortComparer">CustomSortComparer</a></td>
<td>Holds a Comparer to use for sorting, if not using the default.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_DisplayIndex">DisplayIndex</a></td>
<td>Gets or sets the display position of the column relative to the other columns in the <a href="T_Avalonia_Controls_DataGrid">DataGrid</a>.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_Header">Header</a></td>
<td>Gets or sets the <a href="T_Avalonia_Controls_DataGridColumnHeader">DataGridColumnHeader</a> content<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_HeaderTemplate">HeaderTemplate</a></td>
<td>Gets or sets an <a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a> for the <a href="P_Avalonia_Controls_DataGridColumn_Header">Header</a><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td>Gets or sets the parent object that inherited <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> values are inherited from.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_IsAutoGenerated">IsAutoGenerated</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_IsFrozen">IsFrozen</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridTemplateColumn_IsReadOnly">IsReadOnly</a></td>
<td><br />(Overrides <a href="P_Avalonia_Controls_DataGridColumn_IsReadOnly">DataGridColumn.IsReadOnly</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_IsVisible">IsVisible</a></td>
<td>Determines whether or not this column is visible.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item">Item(AvaloniaProperty)</a></td>
<td>Gets or sets the value of a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item_1">Item(IndexerDescriptor)</a></td>
<td>Gets or sets a binding for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_MaxWidth">MaxWidth</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_MinWidth">MinWidth</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_OwningGrid">OwningGrid</a></td>
<td>Gets the <a href="T_Avalonia_Controls_DataGrid">DataGrid</a> control that contains this column.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_SortMemberPath">SortMemberPath</a></td>
<td>Holds the name of the member to use for sorting, if not using the default.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_Tag">Tag</a></td>
<td>Gets or sets an object associated with this column.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridColumn_Width">Width</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind">Bind(AvaloniaProperty, IBinding)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind_1">Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_2">Bind(T)(DirectPropertyBase(T), IObservable(T))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1">Bind(T)(DirectPropertyBase(T), IObservable(BindingValue(T)))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_1">Bind(T)(DirectPropertyBase(T), IObservable(Object))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_5">Bind(T)(StyledProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_3">Bind(T)(StyledProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_4">Bind(T)(StyledProperty(T), IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_CancelCellEdit">CancelCellEdit(Control, Object)</a></td>
<td>When overridden in a derived class, causes the column cell being edited to revert to the unedited value.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CheckAccess">CheckAccess()</a></td>
<td>Returns a value indicating whether the current thread is the UI thread.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_ClearSort">ClearSort()</a></td>
<td>Clears the current sort direction<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue">ClearValue(AvaloniaProperty)</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1">ClearValue(T)(AvaloniaProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_1">ClearValue(T)(DirectPropertyBase(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_2">ClearValue(T)(StyledProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CoerceValue">CoerceValue(AvaloniaProperty)</a></td>
<td>Coerces the specified <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridTemplateColumn_EndCellEdit">EndCellEdit()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_DataGridColumn_EndCellEdit">DataGridColumn.EndCellEdit()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Equals">Equals(Object)</a></td>
<td>Compares two objects using reference equality.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridTemplateColumn_GenerateEditingElement">GenerateEditingElement(DataGridCell, Object, ICellEditBinding)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_DataGridColumn_GenerateEditingElement">DataGridColumn.GenerateEditingElement(DataGridCell, Object, ICellEditBinding)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridTemplateColumn_GenerateElement">GenerateElement(DataGridCell, Object)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_DataGridColumn_GenerateElement">DataGridColumn.GenerateElement(DataGridCell, Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetBaseValue__1">GetBaseValue(T)(StyledProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_GetCellContent">GetCellContent(DataGridRow)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_GetCellContent_1">GetCellContent(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetHashCode">GetHashCode()</a></td>
<td>Gets the hash code for the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue">GetValue(AvaloniaProperty)</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1">GetValue(T)(DirectPropertyBase(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1_1">GetValue(T)(StyledProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsAnimating">IsAnimating(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is animating.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsSet">IsSet(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is set on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_NotifyPropertyChanged">NotifyPropertyChanged(String)</a></td>
<td>Called by a specific column type when one of its properties changed, and its current cells need to be updated.<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td>Called when a avalonia property changes on the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridTemplateColumn_PrepareCellForEdit">PrepareCellForEdit(Control, RoutedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_DataGridColumn_PrepareCellForEdit">DataGridColumn.PrepareCellForEdit(Control, RoutedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Raises the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event for a direct property.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridTemplateColumn_RefreshCellContent">RefreshCellContent(Control, String)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_DataGridColumn_RefreshCellContent">DataGridColumn.RefreshCellContent(Control, String)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetAndRaise__1">SetAndRaise(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Sets the backing field for a direct avalonia property, raising the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event if the value has changed.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue(AvaloniaProperty, Object)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue__1">SetCurrentValue(T)(StyledProperty(T), T)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue">SetValue(AvaloniaProperty, Object, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1">SetValue(T)(DirectPropertyBase(T), T)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1_1">SetValue(T)(StyledProperty(T), T, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_Sort">Sort()</a></td>
<td>Switches the current state of sort direction<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridColumn_Sort_1">Sort(ListSortDirection)</a></td>
<td>Changes the sort direction of this column<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td>Called to update the validation state for properties for which data validation is enabled.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_VerifyAccess">VerifyAccess()</a></td>
<td>Checks that the current thread is the UI thread and throws if not.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_DataGridColumn_HeaderPointerPressed">HeaderPointerPressed</a></td>
<td>Occurs when the pointer is pressed over the column's header<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGridColumn_HeaderPointerReleased">HeaderPointerReleased</a></td>
<td>Occurs when the pointer is released over the column's header<br />(Inherited from <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value changes on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_DataGridTemplateColumn_CellEditingTemplateProperty">CellEditingTemplateProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_DataGridTemplateColumn_CellEditingTemplate">CellEditingTemplate</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_DataGridTemplateColumn_CellTemplateProperty">CellTemplateProperty</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind">Bind(AvaloniaProperty, IBinding, Object)</a></td>
<td>Binds a property on an <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1">Bind(T)(AvaloniaProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1_1">Bind(T)(AvaloniaProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue">GetBaseValue(AvaloniaProperty)</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue__1">GetBaseValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1_1">GetBindingObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1">GetBindingObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__2">GetBindingObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject">GetBindingSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject__1">GetBindingSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetDiagnostic">GetDiagnostic(AvaloniaProperty)</a></td>
<td>Gets a diagnostic for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1_1">GetObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1">GetObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__2">GetObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetPropertyChangedObservable">GetPropertyChangedObservable(AvaloniaProperty)</a></td>
<td>Gets an observable that listens for property changed events for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject">GetSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject__1">GetSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetValue__1">GetValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetValueStoreDiagnostic">GetValueStoreDiagnostic()</a></td>
<td>Gets a value store diagnostics for a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

