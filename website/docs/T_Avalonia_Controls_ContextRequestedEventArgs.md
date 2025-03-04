import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ContextRequestedEventArgs Class


Provides event data for the ContextRequested event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ContextRequestedEventArgs : RoutedEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ContextRequestedEventArgs
	Inherits RoutedEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ContextRequestedEventArgs = 
    class
        inherit RoutedEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ContextRequestedEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  RoutedEventArgs  →  ContextRequestedEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_ContextRequestedEventArgs__ctor">ContextRequestedEventArgs()</a></td>
<td>Initializes a new instance of the ContextRequestedEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ContextRequestedEventArgs__ctor_1">ContextRequestedEventArgs(ContextRequestedEventArgs)</a></td>
<td>Initializes a new instance of the ContextRequestedEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ContextRequestedEventArgs__ctor_2">ContextRequestedEventArgs(PointerEventArgs)</a></td>
<td>Initializes a new instance of the ContextRequestedEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>Handled</td>
<td><br />(Inherited from RoutedEventArgs)</td>
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
<tr>
<td><a href="M_Avalonia_Controls_ContextRequestedEventArgs_TryGetPosition">TryGetPosition(Control, Point)</a></td>
<td>Gets the x- and y-coordinates of the pointer position, optionally evaluated against a coordinate origin of a supplied <a href="T_Avalonia_Controls_Control">Control</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
