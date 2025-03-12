# FuncTreeDataTemplate&lt;T&gt; Class


A template used to build hierarchical data.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class FuncTreeDataTemplate<T> : FuncTreeDataTemplate

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class FuncTreeDataTemplate(Of T)
	Inherits FuncTreeDataTemplate
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FuncTreeDataTemplate<'T> = 
    class
        inherit FuncTreeDataTemplate
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncTreeDataTemplate%601.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Controls_Control">Control</a>)  →  <a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate</a>  →  <a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate</a>  →  FuncTreeDataTemplate(T)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the template's data.</dd></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncTreeDataTemplate_1__ctor_1">FuncTreeDataTemplate(T)(Func(T, INameScope, Control), Func(T, IEnumerable))</a></td>
<td>Initializes a new instance of the FuncTreeDataTemplate(T) class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncTreeDataTemplate_1__ctor">FuncTreeDataTemplate(T)(Func(T, Boolean), Func(T, INameScope, Control), Func(T, IEnumerable))</a></td>
<td>Initializes a new instance of the FuncTreeDataTemplate(T) class.</td>
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
<td><a href="M_Avalonia_Controls_Templates_FuncTreeDataTemplate_ItemsSelector">ItemsSelector(Object)</a></td>
<td>Selects the child items of an item.<br />(Inherited from <a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate</a>)</td>
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

