# WindowClosingEventArgs Class


Provides data for the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class WindowClosingEventArgs : CancelEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class WindowClosingEventArgs
	Inherits CancelEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type WindowClosingEventArgs = 
    class
        inherit CancelEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/WindowClosingEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs" target="_blank" rel="noopener noreferrer">CancelEventArgs</a>  →  WindowClosingEventArgs</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs.cancel" target="_blank" rel="noopener noreferrer">Cancel</a></td>
<td>Gets or sets a value indicating whether the event should be canceled.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs" target="_blank" rel="noopener noreferrer">CancelEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowClosingEventArgs_CloseReason">CloseReason</a></td>
<td>Gets a value that indicates why the window is being closed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowClosingEventArgs_IsProgrammatic">IsProgrammatic</a></td>
<td>Gets a value indicating whether the window is being closed programmatically.</td>
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

