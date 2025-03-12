# RoutedEventArgs Class


Provides state information and data specific to a routed event.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RoutedEventArgs : EventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RoutedEventArgs
	Inherits EventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RoutedEventArgs = 
    class
        inherit EventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/RoutedEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  RoutedEventArgs</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_CalendarDateChangedEventArgs">Avalonia.Controls.CalendarDateChangedEventArgs</a><br /><a href="T_Avalonia_Controls_CalendarModeChangedEventArgs">Avalonia.Controls.CalendarModeChangedEventArgs</a><br /><a href="T_Avalonia_Controls_ContextRequestedEventArgs">Avalonia.Controls.ContextRequestedEventArgs</a><br /><a href="T_Avalonia_Controls_NumericUpDownValueChangedEventArgs">Avalonia.Controls.NumericUpDownValueChangedEventArgs</a><br /><a href="T_Avalonia_Controls_Primitives_RangeBaseValueChangedEventArgs">Avalonia.Controls.Primitives.RangeBaseValueChangedEventArgs</a><br /><a href="T_Avalonia_Controls_Primitives_TemplateAppliedEventArgs">Avalonia.Controls.Primitives.TemplateAppliedEventArgs</a><br /><a href="T_Avalonia_Controls_RefreshRequestedEventArgs">Avalonia.Controls.RefreshRequestedEventArgs</a><br /><a href="T_Avalonia_Controls_RequestBringIntoViewEventArgs">Avalonia.Controls.RequestBringIntoViewEventArgs</a><br /><a href="T_Avalonia_Controls_ScrollChangedEventArgs">Avalonia.Controls.ScrollChangedEventArgs</a><br /><a href="T_Avalonia_Controls_SelectionChangedEventArgs">Avalonia.Controls.SelectionChangedEventArgs</a><br /><a href="T_Avalonia_Controls_SizeChangedEventArgs">Avalonia.Controls.SizeChangedEventArgs</a><br /><a href="T_Avalonia_Controls_SpinEventArgs">Avalonia.Controls.SpinEventArgs</a><br /><a href="T_Avalonia_Controls_TextChangedEventArgs">Avalonia.Controls.TextChangedEventArgs</a><br /><a href="T_Avalonia_Controls_TextChangingEventArgs">Avalonia.Controls.TextChangingEventArgs</a><br /><a href="T_Avalonia_Controls_TransitionCompletedEventArgs">Avalonia.Controls.TransitionCompletedEventArgs</a><br /><a href="T_Avalonia_Input_DragEventArgs">Avalonia.Input.DragEventArgs</a><br /><a href="T_Avalonia_Input_GotFocusEventArgs">Avalonia.Input.GotFocusEventArgs</a><br /><a href="T_Avalonia_Input_HoldingRoutedEventArgs">Avalonia.Input.HoldingRoutedEventArgs</a><br /><a href="T_Avalonia_Input_KeyEventArgs">Avalonia.Input.KeyEventArgs</a><br /><a href="T_Avalonia_Input_PinchEndedEventArgs">Avalonia.Input.PinchEndedEventArgs</a><br /><a href="T_Avalonia_Input_PinchEventArgs">Avalonia.Input.PinchEventArgs</a><br /><a href="T_Avalonia_Input_PointerCaptureLostEventArgs">Avalonia.Input.PointerCaptureLostEventArgs</a><br /><a href="T_Avalonia_Input_PointerEventArgs">Avalonia.Input.PointerEventArgs</a><br /><a href="T_Avalonia_Input_PullGestureEndedEventArgs">Avalonia.Input.PullGestureEndedEventArgs</a><br /><a href="T_Avalonia_Input_PullGestureEventArgs">Avalonia.Input.PullGestureEventArgs</a><br /><a href="T_Avalonia_Input_ScrollGestureEndedEventArgs">Avalonia.Input.ScrollGestureEndedEventArgs</a><br /><a href="T_Avalonia_Input_ScrollGestureEventArgs">Avalonia.Input.ScrollGestureEventArgs</a><br /><a href="T_Avalonia_Input_ScrollGestureInertiaStartingEventArgs">Avalonia.Input.ScrollGestureInertiaStartingEventArgs</a><br /><a href="T_Avalonia_Input_TappedEventArgs">Avalonia.Input.TappedEventArgs</a><br /><a href="T_Avalonia_Input_TextInput_TextInputMethodClientRequeryRequestedEventArgs">Avalonia.Input.TextInput.TextInputMethodClientRequeryRequestedEventArgs</a><br /><a href="T_Avalonia_Input_TextInput_TextInputMethodClientRequestedEventArgs">Avalonia.Input.TextInput.TextInputMethodClientRequestedEventArgs</a><br /><a href="T_Avalonia_Input_TextInputEventArgs">Avalonia.Input.TextInputEventArgs</a><br /><a href="T_Avalonia_Input_VectorEventArgs">Avalonia.Input.VectorEventArgs</a><br /><a href="T_Avalonia_Interactivity_CancelRoutedEventArgs">Avalonia.Interactivity.CancelRoutedEventArgs</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEventArgs__ctor">RoutedEventArgs()</a></td>
<td>Initializes a new instance of the RoutedEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEventArgs__ctor_2">RoutedEventArgs(RoutedEvent)</a></td>
<td>Initializes a new instance of the RoutedEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEventArgs__ctor_1">RoutedEventArgs(RoutedEvent, Object)</a></td>
<td>Initializes a new instance of the RoutedEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Handled">Handled</a></td>
<td>Gets or sets a value indicating whether the routed event has already been handled.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Route">Route</a></td>
<td>Gets or sets the routing strategy (direct, bubbling, or tunneling) of the routed event.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_RoutedEvent">RoutedEvent</a></td>
<td>Gets or sets the routed event associated with these event args.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Source">Source</a></td>
<td>Gets or sets the source object that raised the routed event.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  

