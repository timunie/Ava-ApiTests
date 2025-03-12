# DefaultMenuInteractionHandler Class


Provides the default keyboard and pointer interaction for menus.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute]
public class DefaultMenuInteractionHandler : IMenuInteractionHandler
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute>
Public Class DefaultMenuInteractionHandler
	Implements IMenuInteractionHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute>]
type DefaultMenuInteractionHandler = 
    class
        interface IMenuInteractionHandler
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/DefaultMenuInteractionHandler.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DefaultMenuInteractionHandler</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Platform_IMenuInteractionHandler">IMenuInteractionHandler</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler__ctor_1">DefaultMenuInteractionHandler(Boolean)</a></td>
<td>Initializes a new instance of the DefaultMenuInteractionHandler class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler__ctor">DefaultMenuInteractionHandler(Boolean, IInputManager, Action(Action, TimeSpan))</a></td>
<td>Initializes a new instance of the DefaultMenuInteractionHandler class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_DelayRun">DelayRun</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_InputManager">InputManager</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_MenuShowDelay">MenuShowDelay</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_AccessKeyPressed">AccessKeyPressed(Object, RoutedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_Attach">Attach(MenuBase)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_Detach">Detach(MenuBase)</a></td>
<td> </td>
</tr>
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
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_GotFocus">GotFocus(Object, GotFocusEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_KeyDown">KeyDown(Object, KeyEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_LostFocus">LostFocus(Object, RoutedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_MenuOpened">MenuOpened(Object, RoutedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_PointerEntered">PointerEntered(Object, RoutedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_PointerExited">PointerExited(Object, RoutedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_PointerMoved">PointerMoved(Object, PointerEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_PointerPressed">PointerPressed(Object, PointerPressedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_PointerReleased">PointerReleased(Object, PointerReleasedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_RawInput">RawInput(RawInputEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_RootPointerPressed">RootPointerPressed(Object, PointerPressedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_DefaultMenuInteractionHandler_WindowDeactivated">WindowDeactivated(Object, EventArgs)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  

