# InputPaneStateEventArgs Class


Provides state change information about the input pane.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class InputPaneStateEventArgs : EventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class InputPaneStateEventArgs
	Inherits EventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type InputPaneStateEventArgs = 
    class
        inherit EventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/IInputPane.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  InputPaneStateEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Platform_InputPaneStateEventArgs__ctor_1">InputPaneStateEventArgs(InputPaneState, Nullable(Rect), Rect)</a></td>
<td>Initializes a new instance of the InputPaneStateEventArgs class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_InputPaneStateEventArgs__ctor">InputPaneStateEventArgs(InputPaneState, Nullable(Rect), Rect, TimeSpan, IEasing)</a></td>
<td>Initializes a new instance of the InputPaneStateEventArgs class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Platform_InputPaneStateEventArgs_AnimationDuration">AnimationDuration</a></td>
<td>The duration of the input pane's state change animation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_InputPaneStateEventArgs_Easing">Easing</a></td>
<td>The easing of the input pane's state changed animation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_InputPaneStateEventArgs_EndRect">EndRect</a></td>
<td>The final bounds of the input pane.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_InputPaneStateEventArgs_NewState">NewState</a></td>
<td>The new state of the input pane</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_InputPaneStateEventArgs_StartRect">StartRect</a></td>
<td>The initial bounds of the input pane.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  
