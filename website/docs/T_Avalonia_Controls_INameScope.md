# INameScope Interface


Defines a name scope.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface INameScope
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface INameScope
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type INameScope = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/INameScope.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_INameScope_IsCompleted">IsCompleted</a></td>
<td>Returns whether further registrations are allowed on the scope</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_Complete">Complete()</a></td>
<td>Marks the name scope as completed, no further registrations will be allowed</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_Find">Find(String)</a></td>
<td>Finds a named element in the name scope, returns immediately, doesn't traverse the name scope stack</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_FindAsync">FindAsync(String)</a></td>
<td>Finds a named element in the name scope, waits for the scope to be completely populated before returning null Returned task is configured to run any continuations synchronously.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_Register">Register(String, Object)</a></td>
<td>Registers an element in the name scope.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Find__1">Find(T)(String)</a></td>
<td>Finds a named element in an INameScope.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Get__1">Get(T)(String)</a></td>
<td>Gets a named element from an INameScope or throws if no element of the requested name was found.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

