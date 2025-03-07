# DataGrid Events




## Events
<table>
<tr>
<td><a href="E_Avalonia_StyledElement_ActualThemeVariantChanged">ActualThemeVariantChanged</a></td>
<td>Raised when the theme variant is changed on the element or an ancestor of the element.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_AttachedToLogicalTree">AttachedToLogicalTree</a></td>
<td>Raised when the styled element is attached to a rooted logical tree.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Visual_AttachedToVisualTree">AttachedToVisualTree</a></td>
<td>Raised when the control is attached to a rooted visual tree.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_AutoGeneratingColumn">AutoGeneratingColumn</a></td>
<td>Occurs one time for each public, non-static property in the bound data type when the <a href="P_Avalonia_Controls_DataGrid_ItemsSource">ItemsSource</a> property is changed and the <a href="P_Avalonia_Controls_DataGrid_AutoGenerateColumns">AutoGenerateColumns</a> property is true.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_BeginningEdit">BeginningEdit</a></td>
<td>Occurs before a cell or row enters editing mode.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_CellEditEnded">CellEditEnded</a></td>
<td>Occurs after cell editing has ended.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_CellEditEnding">CellEditEnding</a></td>
<td>Occurs immediately before cell editing has ended.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_CellPointerPressed">CellPointerPressed</a></td>
<td>Occurs when cell is mouse-pressed.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_ColumnDisplayIndexChanged">ColumnDisplayIndexChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_DataGridColumn_DisplayIndex">DisplayIndex</a> property of a column changes.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_ColumnReordered">ColumnReordered</a></td>
<td>Raised when column reordering ends, to allow subscribers to clean up.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_ColumnReordering">ColumnReordering</a></td>
<td>Raised when starting a column reordering action. Subscribers to this event can set tooltip and caret UIElements, constrain tooltip position, indicate that a preview should be shown, or cancel reordering.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td>Occurs when the user has completed a context input gesture, such as a right-click.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_CopyingRowClipboardContent">CopyingRowClipboardContent</a></td>
<td>This event is raised by OnCopyingRowClipboardContent method after the default row content is prepared. Event listeners can modify or add to the row clipboard content.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_CurrentCellChanged">CurrentCellChanged</a></td>
<td>Occurs when a different cell becomes the current cell.</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DataContextChanged">DataContextChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> property changes.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DetachedFromLogicalTree">DetachedFromLogicalTree</a></td>
<td>Raised when the styled element is detached from a rooted logical tree.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Visual_DetachedFromVisualTree">DetachedFromVisualTree</a></td>
<td>Raised when the control is detached from a rooted visual tree.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_DoubleTapped">DoubleTapped</a></td>
<td>Occurs when a double-tap gesture occurs on the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Layout_Layoutable_EffectiveViewportChanged">EffectiveViewportChanged</a></td>
<td>Occurs when the element's effective viewport changes.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_GotFocus">GotFocus</a></td>
<td>Occurs when the control receives focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_Holding">Holding</a></td>
<td>Occurs when a hold gesture occurs on the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_HorizontalScroll">HorizontalScroll</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_Initialized">Initialized</a></td>
<td>Occurs when the styled element has finished initialization.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_KeyDown">KeyDown</a></td>
<td>Occurs when a key is pressed while the control has focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_KeyUp">KeyUp</a></td>
<td>Occurs when a key is released while the control has focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Layout_Layoutable_LayoutUpdated">LayoutUpdated</a></td>
<td>Occurs when a layout pass completes for the control.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Loaded">Loaded</a></td>
<td>Occurs when the control has been fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_LoadingRow">LoadingRow</a></td>
<td>Occurs after a <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a> is instantiated, so that you can customize it before it is used.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_LoadingRowDetails">LoadingRowDetails</a></td>
<td>Occurs when a new row details template is applied to a row, so that you can customize the details section before it is used.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_LoadingRowGroup">LoadingRowGroup</a></td>
<td>Occurs before a DataGridRowGroupHeader header is used.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_LostFocus">LostFocus</a></td>
<td>Occurs when the control loses focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerCaptureLost">PointerCaptureLost</a></td>
<td>Occurs when the control or its child control loses the pointer capture for any reason, event will not be triggered for a parent control if capture was transferred to another child of that parent control<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerEntered">PointerEntered</a></td>
<td>Occurs when the pointer enters the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerExited">PointerExited</a></td>
<td>Occurs when the pointer leaves the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerMoved">PointerMoved</a></td>
<td>Occurs when the pointer moves over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerPressed">PointerPressed</a></td>
<td>Occurs when the pointer is pressed over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerReleased">PointerReleased</a></td>
<td>Occurs when the pointer is released over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerWheelChanged">PointerWheelChanged</a></td>
<td>Occurs when the mouse is scrolled over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_PreparingCellForEdit">PreparingCellForEdit</a></td>
<td>Occurs when a cell in a <a href="T_Avalonia_Controls_DataGridTemplateColumn">DataGridTemplateColumn</a> enters editing mode.</td>
</tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value changes on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_ResourcesChanged">ResourcesChanged</a></td>
<td>Occurs when a resource in this styled element or a parent styled element has changed.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_RowDetailsVisibilityChanged">RowDetailsVisibilityChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_DataGrid_RowDetailsVisibilityMode">RowDetailsVisibilityMode</a> property value changes.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_RowEditEnded">RowEditEnded</a></td>
<td>Occurs when the row has been successfully committed or cancelled.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_RowEditEnding">RowEditEnding</a></td>
<td>Occurs immediately before the row has been successfully committed or cancelled.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_SelectionChanged">SelectionChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_DataGrid_SelectedItem">SelectedItem</a> or <a href="P_Avalonia_Controls_DataGrid_SelectedItems">SelectedItems</a> property value changes.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a></td>
<td>Occurs when the bounds (actual size) of the control have changed.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_Sorting">Sorting</a></td>
<td>Occurs when the <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a> sorting request is triggered.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_Tapped">Tapped</a></td>
<td>Occurs when a tap gesture occurs on the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_TemplatedControl_TemplateApplied">TemplateApplied</a></td>
<td>Raised when the control's template is applied.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_TextInput">TextInput</a></td>
<td>Occurs when a user typed some text while the control has focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_TextInputMethodClientRequested">TextInputMethodClientRequested</a></td>
<td>Occurs when an input element gains input focus and input method is looking for the corresponding client<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a></td>
<td>Occurs when the control is removed from the visual tree.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_UnloadingRow">UnloadingRow</a></td>
<td>Occurs when a <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a> object becomes available for reuse.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_UnloadingRowDetails">UnloadingRowDetails</a></td>
<td>Occurs when a row details element becomes available for reuse.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_UnloadingRowGroup">UnloadingRowGroup</a></td>
<td>Occurs when the DataGridRowGroupHeader is available for reuse.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_DataGrid_VerticalScroll">VerticalScroll</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
