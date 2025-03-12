# KeyEventArgs Class


Provides information specific to a keyboard event.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class KeyEventArgs : RoutedEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class KeyEventArgs
	Inherits RoutedEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type KeyEventArgs = 
    class
        inherit RoutedEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>  →  KeyEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_KeyEventArgs__ctor">KeyEventArgs()</a></td>
<td>Initializes a new instance of the KeyEventArgs class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Handled">Handled</a></td>
<td>Gets or sets a value indicating whether the routed event has already been handled.<br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyEventArgs_Key">Key</a></td>
<td><p>Gets the virtual-key for the associated event.<br /> A given physical key can result in different virtual keys depending on the current keyboard layout.<br /> This is the key that is generally referred to when creating keyboard shortcuts.</p><p>For example, when pressing the key located at the <code>Z</code> position on standard US English QWERTY keyboard, this property returns:<br /> - <a href="T_Avalonia_Input_Key">Z</a> for an English (QWERTY) layout<br /> - <a href="T_Avalonia_Input_Key">W</a> for a French (AZERTY) layout<br /> - <a href="T_Avalonia_Input_Key">Y</a> for a German (QWERTZ) layout<br /> - <a href="T_Avalonia_Input_Key">Z</a> for a Russian (JCUKEN) layout</p></td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyEventArgs_KeyDeviceType">KeyDeviceType</a></td>
<td>Type of the device that fire the event</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyEventArgs_KeyModifiers">KeyModifiers</a></td>
<td>Gets the key modifiers for the associated event.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyEventArgs_KeySymbol">KeySymbol</a></td>
<td><p>Gets the unicode symbol of the key, or null if none is applicable.</p><p>For example, when pressing the key located at the <code>Z</code> position on standard US English QWERTY keyboard, this property returns:<br /> - <code>z</code> for an English (QWERTY) layout<br /> - <code>w</code> for a French (AZERTY) layout<br /> - <code>y</code> for a German (QWERTZ) layout<br /> - <code>я</code> for a Russian (JCUKEN) layout</p></td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyEventArgs_PhysicalKey">PhysicalKey</a></td>
<td><p>Gets the physical key for the associated event.</p><p>This value is independent of the current keyboard layout and usually correspond to the key printed on a standard US English QWERTY keyboard.</p></td>
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
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

