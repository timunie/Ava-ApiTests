import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SizeChangedEventArgs Class


Provides data specific to a SizeChanged event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class SizeChangedEventArgs : RoutedEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class SizeChangedEventArgs
	Inherits RoutedEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SizeChangedEventArgs = 
    class
        inherit RoutedEventArgs
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  RoutedEventArgs  →  SizeChangedEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_SizeChangedEventArgs__ctor_2">SizeChangedEventArgs(RoutedEvent)</a></td>
<td>Initializes a new instance of the SizeChangedEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_SizeChangedEventArgs__ctor_1">SizeChangedEventArgs(RoutedEvent, Object)</a></td>
<td>Initializes a new instance of the SizeChangedEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_SizeChangedEventArgs__ctor">SizeChangedEventArgs(RoutedEvent, Object, Size, Size)</a></td>
<td>Initializes a new instance of the SizeChangedEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>Handled</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_SizeChangedEventArgs_HeightChanged">HeightChanged</a></td>
<td>Gets a value indicating whether the height of the new size is considered different than the previous size height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_SizeChangedEventArgs_NewSize">NewSize</a></td>
<td>Gets the new size (or bounds) of the object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_SizeChangedEventArgs_PreviousSize">PreviousSize</a></td>
<td>Gets the previous size (or bounds) of the object.</td>
</tr>
<tr>
<td>Route</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
<tr>
<td>RoutedEvent</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
<tr>
<td>Source</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_SizeChangedEventArgs_WidthChanged">WidthChanged</a></td>
<td>Gets a value indicating whether the width of the new size is considered different than the previous size width.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
