# FuncTemplate&lt;TParam, TControl&gt; Class


Creates a control from a <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func(T, TResult)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class FuncTemplate<TParam, TControl> : ITemplate<TParam, TControl>
where TControl : Control

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class FuncTemplate(Of TParam, TControl As Control)
	Implements ITemplate(Of TParam, TControl)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FuncTemplate<'TParam, 'TControl when 'TControl : Control> = 
    class
        interface ITemplate<'TParam, 'TControl>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncTemplate%602.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  FuncTemplate(TParam, TControl)</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Templates_FuncControlTemplate">Avalonia.Controls.Templates.FuncControlTemplate</a><br /><a href="T_Avalonia_Controls_Templates_FuncDataTemplate">Avalonia.Controls.Templates.FuncDataTemplate</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Templates_ITemplate_2">ITemplate</a>(TParam, TControl)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the parameter.</dd><dt /><dd>The type of control.</dd></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncTemplate_2__ctor">FuncTemplate(TParam, TControl)(Func(TParam, INameScope, TControl))</a></td>
<td>Initializes a new instance of the FuncTemplate(TParam, TControl) class.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncTemplate_2_Build">Build(TParam)</a></td>
<td>Creates the control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncTemplate_2_BuildWithNameScope">BuildWithNameScope(TParam)</a></td>
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
