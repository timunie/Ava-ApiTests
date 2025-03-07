# NameScope Class


Implements a name scope.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class NameScope : INameScope
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class NameScope
	Implements INameScope
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type NameScope = 
    class
        interface INameScope
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/NameScope.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  NameScope</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_INameScope">INameScope</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_NameScope__ctor">NameScope()</a></td>
<td>Initializes a new instance of the NameScope class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_NameScope_IsCompleted">IsCompleted</a></td>
<td>Returns whether further registrations are allowed on the scope</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_NameScope_Complete">Complete()</a></td>
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
<td><a href="M_Avalonia_Controls_NameScope_Find">Find(String)</a></td>
<td>Finds a named element in the name scope, returns immediately, doesn't traverse the name scope stack</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScope_FindAsync">FindAsync(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScope_GetNameScope">GetNameScope(StyledElement)</a></td>
<td>Gets the value of the attached <a href="F_Avalonia_Controls_NameScope_NameScopeProperty">NameScopeProperty</a> on a styled element.</td>
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
<td><a href="M_Avalonia_Controls_NameScope_Register">Register(String, Object)</a></td>
<td>Registers an element in the name scope.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScope_SetNameScope">SetNameScope(StyledElement, INameScope)</a></td>
<td>Sets the value of the attached <a href="F_Avalonia_Controls_NameScope_NameScopeProperty">NameScopeProperty</a> on a styled element.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_NameScope_NameScopeProperty">NameScopeProperty</a></td>
<td>Defines the NameScope attached property.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Find__1">Find(T)(String)</a></td>
<td>Finds a named element in an <a href="T_Avalonia_Controls_INameScope">INameScope</a>.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Get__1">Get(T)(String)</a></td>
<td>Gets a named element from an <a href="T_Avalonia_Controls_INameScope">INameScope</a> or throws if no element of the requested name was found.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
