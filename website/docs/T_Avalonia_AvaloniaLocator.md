# AvaloniaLocator Class




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AvaloniaLocator : IAvaloniaDependencyResolver
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AvaloniaLocator
	Implements IAvaloniaDependencyResolver
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AvaloniaLocator = 
    class
        interface IAvaloniaDependencyResolver
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaLocator.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaLocator</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_IAvaloniaDependencyResolver">IAvaloniaDependencyResolver</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaLocator__ctor">AvaloniaLocator()</a></td>
<td>Initializes a new instance of the AvaloniaLocator class</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaLocator__ctor_1">AvaloniaLocator(IAvaloniaDependencyResolver)</a></td>
<td>Initializes a new instance of the AvaloniaLocator class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaLocator_Current">Current</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaLocator_CurrentMutable">CurrentMutable</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaLocator_Bind__1">Bind(T)()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaLocator_BindToSelf__1">BindToSelf(T)(T)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaLocator_BindToSelfSingleton__1">BindToSelfSingleton(T)()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaLocator_EnterScope">EnterScope()</a></td>
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
<td><a href="M_Avalonia_AvaloniaLocator_GetService">GetService(Type)</a></td>
<td> </td>
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

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_LocatorExtensions_GetRequiredService">GetRequiredService(Type)</a></td>
<td><br />(Defined by <a href="T_Avalonia_LocatorExtensions">LocatorExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LocatorExtensions_GetRequiredService__1">GetRequiredService(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LocatorExtensions">LocatorExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LocatorExtensions_GetService__1">GetService(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LocatorExtensions">LocatorExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
