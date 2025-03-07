# IInputElement Interface


Defines input-related functionality for a control.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IInputElement
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IInputElement = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputElement.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_Cursor">Cursor</a></td>
<td>Gets or sets the associated mouse cursor.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_Focusable">Focusable</a></td>
<td>Gets or sets a value indicating whether the control can receive keyboard focus.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsEffectivelyEnabled">IsEffectivelyEnabled</a></td>
<td>Gets a value indicating whether this control and all its parents are enabled.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsEffectivelyVisible">IsEffectivelyVisible</a></td>
<td>Gets a value indicating whether this control and all its parents are visible.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsEnabled">IsEnabled</a></td>
<td>Gets or sets a value indicating whether the control is enabled for user interaction.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsFocused">IsFocused</a></td>
<td>Gets a value indicating whether the control is focused.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsHitTestVisible">IsHitTestVisible</a></td>
<td>Gets a value indicating whether the control is considered for hit testing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsKeyboardFocusWithin">IsKeyboardFocusWithin</a></td>
<td>Gets a value indicating whether keyboard focus is anywhere within the element or its visual tree child elements.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsPointerOver">IsPointerOver</a></td>
<td>Gets a value indicating whether the pointer is currently over the control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_KeyBindings">KeyBindings</a></td>
<td>Gets the key bindings for the element.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_AddHandler">AddHandler(RoutedEvent, Delegate, RoutingStrategies, Boolean)</a></td>
<td>Adds a handler for the specified routed event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_Focus">Focus(NavigationMethod, KeyModifiers)</a></td>
<td>Focuses the control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_RaiseEvent">RaiseEvent(RoutedEventArgs)</a></td>
<td>Raises a routed event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_RemoveHandler">RemoveHandler(RoutedEvent, Delegate)</a></td>
<td>Removes a handler for the specified routed event.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_GotFocus">GotFocus</a></td>
<td>Occurs when the control receives focus.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_KeyDown">KeyDown</a></td>
<td>Occurs when a key is pressed while the control has focus.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_KeyUp">KeyUp</a></td>
<td>Occurs when a key is released while the control has focus.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_LostFocus">LostFocus</a></td>
<td>Occurs when the control loses focus.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerEntered">PointerEntered</a></td>
<td>Occurs when the pointer enters the control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerExited">PointerExited</a></td>
<td>Occurs when the pointer leaves the control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerMoved">PointerMoved</a></td>
<td>Occurs when the pointer moves over the control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerPressed">PointerPressed</a></td>
<td>Occurs when the pointer is pressed over the control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerReleased">PointerReleased</a></td>
<td>Occurs when the pointer is released over the control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerWheelChanged">PointerWheelChanged</a></td>
<td>Occurs when the mouse wheel is scrolled over the control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_TextInput">TextInput</a></td>
<td>Occurs when a user typed some text while the control has focus.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_GetInputElementsAt_1">GetInputElementsAt(Point)</a></td>
<td>Returns the active input elements at a point on an IInputElement.<br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_GetInputElementsAt">GetInputElementsAt(Point, Boolean)</a></td>
<td>Returns the active input elements at a point on an IInputElement.<br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_3">InputHitTest(Point)</a></td>
<td>Returns the topmost active input element at a point on an IInputElement.<br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest">InputHitTest(Point, Boolean)</a></td>
<td>Returns the topmost active input element at a point on an IInputElement.<br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_2">InputHitTest(Point, Func(Visual, Boolean))</a></td>
<td>Returns the topmost active input element at a point on an IInputElement.<br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_1">InputHitTest(Point, Func(Visual, Boolean), Boolean)</a></td>
<td>Returns the topmost active input element at a point on an IInputElement.<br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
