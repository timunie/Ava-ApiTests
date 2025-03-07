# RoutedEventRegistry Class


Tracks registered <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>s.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RoutedEventRegistry
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RoutedEventRegistry
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RoutedEventRegistry = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/RoutedEventRegistry.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  RoutedEventRegistry</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEventRegistry__ctor">RoutedEventRegistry()</a></td>
<td>Initializes a new instance of the RoutedEventRegistry class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventRegistry_Instance">Instance</a></td>
<td>Gets the RoutedEventRegistry instance.</td>
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
<td><a href="M_Avalonia_Interactivity_RoutedEventRegistry_GetAllRegistered">GetAllRegistered()</a></td>
<td>Returns all routed events, that are currently registered in the event registry.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEventRegistry_GetRegistered">GetRegistered(Type)</a></td>
<td>Returns all routed events registered with the provided type. If the type is not found or does not provide any routed events, an empty list is returned.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEventRegistry_GetRegistered__1">GetRegistered(TOwner)()</a></td>
<td>Returns all routed events registered with the provided type. If the type is not found or does not provide any routed events, an empty list is returned.</td>
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
<td><a href="M_Avalonia_Interactivity_RoutedEventRegistry_Register">Register(Type, RoutedEvent)</a></td>
<td>Registers a <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a> on a type.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
