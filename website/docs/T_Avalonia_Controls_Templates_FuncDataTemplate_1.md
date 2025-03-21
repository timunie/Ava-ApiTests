# FuncDataTemplate&lt;T&gt; Class


Builds a control for a piece of data of specified type.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class FuncDataTemplate<T> : FuncDataTemplate

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class FuncDataTemplate(Of T)
	Inherits FuncDataTemplate
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FuncDataTemplate<'T> = 
    class
        inherit FuncDataTemplate
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncDataTemplate%601.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Controls_Control">Control</a>)  →  <a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate</a>  →  FuncDataTemplate(T)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the template's data.</dd></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncDataTemplate_1__ctor_2">FuncDataTemplate(T)(Func(T, INameScope, Control), Boolean)</a></td>
<td>Initializes a new instance of the FuncDataTemplate(T) class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncDataTemplate_1__ctor">FuncDataTemplate(T)(Func(T, Boolean), Func(T, Control), Boolean)</a></td>
<td>Initializes a new instance of the FuncDataTemplate(T) class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncDataTemplate_1__ctor_1">FuncDataTemplate(T)(Func(T, Boolean), Func(T, INameScope, Control), Boolean)</a></td>
<td>Initializes a new instance of the FuncDataTemplate(T) class.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncTemplate_2_Build">Build(TParam)</a></td>
<td>Creates the control.<br />(Inherited from <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate(TParam, TControl)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncDataTemplate_Build">Build(Object, Control)</a></td>
<td>Creates or recycles a control to display the specified data.<br />(Inherited from <a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncTemplate_2_BuildWithNameScope">BuildWithNameScope(TParam)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate(TParam, TControl)</a>)</td>
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
<td><a href="M_Avalonia_Controls_Templates_FuncDataTemplate_Match">Match(Object)</a></td>
<td>Checks to see if this data template matches the specified data.<br />(Inherited from <a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate</a>)</td>
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
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

