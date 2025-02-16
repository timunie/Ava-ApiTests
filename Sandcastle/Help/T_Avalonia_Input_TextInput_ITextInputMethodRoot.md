---
title:ITextInputMethodRoot Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ITextInputMethodRoot Interface




## Definition
**Namespace:** <a href="N_Avalonia_Input_TextInput">Avalonia.Input.TextInput</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface ITextInputMethodRoot : IInputRoot, 
	IInputElement
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface ITextInputMethodRoot
	Inherits IInputRoot, IInputElement
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type ITextInputMethodRoot = 
    interface
        interface IInputRoot
        interface IInputElement
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Input_IInputElement">IInputElement</a>, <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_Cursor">Cursor</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_Focusable">Focusable</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputRoot_FocusManager">FocusManager</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_TextInput_ITextInputMethodRoot_InputMethod">InputMethod</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsEffectivelyEnabled">IsEffectivelyEnabled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsEffectivelyVisible">IsEffectivelyVisible</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsEnabled">IsEnabled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsFocused">IsFocused</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsHitTestVisible">IsHitTestVisible</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsKeyboardFocusWithin">IsKeyboardFocusWithin</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_IsPointerOver">IsPointerOver</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputElement_KeyBindings">KeyBindings</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputRoot_KeyboardNavigationHandler">KeyboardNavigationHandler</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputRoot_PlatformSettings">PlatformSettings</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputRoot_PointerOverElement">PointerOverElement</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_IInputRoot_ShowAccessKeys">ShowAccessKeys</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_AddHandler">AddHandler(RoutedEvent, Delegate, RoutingStrategies, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_Focus">Focus(NavigationMethod, KeyModifiers)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_RaiseEvent">RaiseEvent(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_IInputElement_RemoveHandler">RemoveHandler(RoutedEvent, Delegate)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_GotFocus">GotFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_KeyDown">KeyDown</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_KeyUp">KeyUp</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_LostFocus">LostFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerEntered">PointerEntered</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerExited">PointerExited</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerMoved">PointerMoved</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerPressed">PointerPressed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerReleased">PointerReleased</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_PointerWheelChanged">PointerWheelChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_IInputElement_TextInput">TextInput</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)</td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_GetInputElementsAt_1">GetInputElementsAt(Point)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_GetInputElementsAt">GetInputElementsAt(Point, Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_3">InputHitTest(Point)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest">InputHitTest(Point, Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_2">InputHitTest(Point, Func(Visual, Boolean))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_1">InputHitTest(Point, Func(Visual, Boolean), Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input_TextInput">Avalonia.Input.TextInput Namespace</a>  
