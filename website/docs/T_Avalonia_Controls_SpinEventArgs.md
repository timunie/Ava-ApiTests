# SpinEventArgs Class


Provides data for the Spinner.Spin event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class SpinEventArgs : RoutedEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class SpinEventArgs
	Inherits RoutedEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SpinEventArgs = 
    class
        inherit RoutedEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Spinner.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>  →  SpinEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_SpinEventArgs__ctor_1">SpinEventArgs(SpinDirection)</a></td>
<td>Initializes a new instance of the SpinEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_SpinEventArgs__ctor_3">SpinEventArgs(RoutedEvent, SpinDirection)</a></td>
<td>Initializes a new instance of the SpinEventArgs class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_SpinEventArgs__ctor">SpinEventArgs(SpinDirection, Boolean)</a></td>
<td>Initializes a new instance of the SpinEventArgs class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_SpinEventArgs__ctor_2">SpinEventArgs(RoutedEvent, SpinDirection, Boolean)</a></td>
<td>Initializes a new instance of the SpinEventArgs class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_SpinEventArgs_Direction">Direction</a></td>
<td>Gets the SpinDirection for the spin that has been initiated by the end-user.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Handled">Handled</a></td>
<td>Gets or sets a value indicating whether the routed event has already been handled.<br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Route">Route</a></td>
<td>Gets or sets the routing strategy (direct, bubbling, or tunneling) of the routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_RoutedEvent">RoutedEvent</a></td>
<td>Gets or sets the routed event associated with these event args.<br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Source">Source</a></td>
<td>Gets or sets the source object that raised the routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_SpinEventArgs_UsingMouseWheel">UsingMouseWheel</a></td>
<td>Get or set whether the spin event originated from a mouse wheel event.</td>
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
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

