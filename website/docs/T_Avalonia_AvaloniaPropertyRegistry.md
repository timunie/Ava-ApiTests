# AvaloniaPropertyRegistry Class


Tracks registered <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> instances.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AvaloniaPropertyRegistry
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AvaloniaPropertyRegistry
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AvaloniaPropertyRegistry = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyRegistry.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaPropertyRegistry</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry__ctor">AvaloniaPropertyRegistry()</a></td>
<td>Initializes a new instance of the AvaloniaPropertyRegistry class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyRegistry_Instance">Instance</a></td>
<td>Gets the AvaloniaPropertyRegistry instance</td>
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
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_FindRegistered">FindRegistered(AvaloniaObject, String)</a></td>
<td>Finds a registered property on an object by name.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_FindRegistered_1">FindRegistered(Type, String)</a></td>
<td>Finds a registered property on a type by name.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_FindRegisteredDirect__1">FindRegisteredDirect(T)(AvaloniaObject, DirectPropertyBase(T))</a></td>
<td>Finds a direct property as registered on an object.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_GetRegistered">GetRegistered(AvaloniaObject)</a></td>
<td>Gets all <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on a object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_GetRegistered_1">GetRegistered(Type)</a></td>
<td>Gets all non-attached <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on a type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_GetRegisteredAttached">GetRegisteredAttached(Type)</a></td>
<td>Gets all attached <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on a type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_GetRegisteredDirect">GetRegisteredDirect(Type)</a></td>
<td>Gets all direct <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on a type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_GetRegisteredDirect__1">GetRegisteredDirect(T)(AvaloniaObject, DirectPropertyBase(T))</a></td>
<td>Gets a direct property as registered on an object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_GetRegisteredInherited">GetRegisteredInherited(Type)</a></td>
<td>Gets all inherited <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on a type.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_IsRegistered">IsRegistered(Object, AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is registered on a object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_IsRegistered_1">IsRegistered(Type, AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is registered on a type.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_Register">Register(Type, AvaloniaProperty)</a></td>
<td>Registers a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_RegisterAttached">RegisterAttached(Type, AvaloniaProperty)</a></td>
<td>Registers an attached <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a type.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaPropertyRegistry_UnregisterByModule">UnregisterByModule(IEnumerable(Type))</a></td>
<td>Unregister all<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s registered on types</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

