import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AutoCompleteBox Events




## Events
<table>
<tr>
<td>ActualThemeVariantChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>AttachedToLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>AttachedToVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td>Occurs when the user has completed a context input gesture, such as a right-click.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>DataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>DetachedFromLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>DetachedFromVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>DoubleTapped</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownClosed">DropDownClosed</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property was changed from true to false and the drop-down is open.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownClosing">DropDownClosing</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property is changing from true to false.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownOpened">DropDownOpened</a></td>
<td>Occurs when the value of the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property has changed from false to true and the drop-down is open.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_DropDownOpening">DropDownOpening</a></td>
<td>Occurs when the value of the <a href="P_Avalonia_Controls_AutoCompleteBox_IsDropDownOpen">IsDropDownOpen</a> property is changing from false to true.</td>
</tr>
<tr>
<td>EffectiveViewportChanged</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>GotFocus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>Holding</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>Initialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>KeyDown</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>KeyUp</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>LayoutUpdated</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Loaded">Loaded</a></td>
<td>Occurs when the control has been fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>LostFocus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerCaptureLost</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerEntered</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerExited</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerMoved</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerPressed</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerReleased</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerWheelChanged</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_Populated">Populated</a></td>
<td>Occurs when the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> has populated the drop-down with possible matches based on the <a href="P_Avalonia_Controls_AutoCompleteBox_Text">Text</a> property.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_Populating">Populating</a></td>
<td>Occurs when the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> is populating the drop-down with possible matches based on the <a href="P_Avalonia_Controls_AutoCompleteBox_Text">Text</a> property.</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ResourcesChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_SelectionChanged">SelectionChanged</a></td>
<td>Occurs when the selected item in the drop-down portion of the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> has changed.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a></td>
<td>Occurs when the bounds (actual size) of the control have changed.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>Tapped</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_TemplatedControl_TemplateApplied">TemplateApplied</a></td>
<td>Raised when the control's template is applied.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_AutoCompleteBox_TextChanged">TextChanged</a></td>
<td>Occurs asynchronously when the text in the TextBox portion of the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> changes.</td>
</tr>
<tr>
<td>TextInput</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>TextInputMethodClientRequested</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a></td>
<td>Occurs when the control is removed from the visual tree.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
