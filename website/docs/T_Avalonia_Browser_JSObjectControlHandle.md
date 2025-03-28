# JSObjectControlHandle Class




## Definition
**Namespace:** <a href="N_Avalonia_Browser">Avalonia.Browser</a>  
**Assembly:** Avalonia.Browser (in Avalonia.Browser.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class JSObjectControlHandle : JSObjectPlatformHandle, 
	INativeControlHostDestroyableControlHandle, IPlatformHandle
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class JSObjectControlHandle
	Inherits JSObjectPlatformHandle
	Implements INativeControlHostDestroyableControlHandle, IPlatformHandle
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type JSObjectControlHandle = 
    class
        inherit JSObjectPlatformHandle
        interface INativeControlHostDestroyableControlHandle
        interface IPlatformHandle
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Browser/Avalonia.Browser/JSObjectControlHandle.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a>  →  <a href="T_Avalonia_Browser_JSObjectPlatformHandle">JSObjectPlatformHandle</a>  →  JSObjectControlHandle</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Platform_INativeControlHostDestroyableControlHandle">INativeControlHostDestroyableControlHandle</a>, <a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Browser_JSObjectControlHandle__ctor">JSObjectControlHandle(JSObject)</a></td>
<td>Initializes a new instance of the JSObjectControlHandle class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_PlatformHandle_Handle">Handle</a></td>
<td>Gets the handle.<br />(Inherited from <a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_PlatformHandle_HandleDescriptor">HandleDescriptor</a></td>
<td>Gets an optional string that describes what <a href="P_Avalonia_Platform_PlatformHandle_Handle">Handle</a> represents.<br />(Inherited from <a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Browser_JSObjectPlatformHandle_Object">Object</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Browser_JSObjectPlatformHandle">JSObjectPlatformHandle</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Browser_JSObjectControlHandle_Destroy">Destroy()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_Equals_1">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_Equals">Equals(PlatformHandle)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.<br />(Inherited from <a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_GetHashCode">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a>)</td>
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
<td><a href="M_Avalonia_Platform_PlatformHandle_ToString">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Browser">Avalonia.Browser Namespace</a>  

