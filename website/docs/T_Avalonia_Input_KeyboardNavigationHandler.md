# KeyboardNavigationHandler Class


Handles keyboard navigation for a window.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class KeyboardNavigationHandler : IKeyboardNavigationHandler
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class KeyboardNavigationHandler
	Implements IKeyboardNavigationHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type KeyboardNavigationHandler = 
    class
        interface IKeyboardNavigationHandler
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyboardNavigationHandler.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  KeyboardNavigationHandler</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Input_IKeyboardNavigationHandler">IKeyboardNavigationHandler</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_KeyboardNavigationHandler__ctor">KeyboardNavigationHandler()</a></td>
<td>Initializes a new instance of the KeyboardNavigationHandler class</td>
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
<td><a href="M_Avalonia_Input_KeyboardNavigationHandler_GetNext">GetNext(IInputElement, NavigationDirection)</a></td>
<td>Gets the next control in the specified navigation direction.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyboardNavigationHandler_Move">Move(IInputElement, NavigationDirection, KeyModifiers)</a></td>
<td>Moves the focus in the specified direction.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyboardNavigationHandler_SetOwner">SetOwner(IInputRoot)</a></td>
<td>Sets the owner of the keyboard navigation handler.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
