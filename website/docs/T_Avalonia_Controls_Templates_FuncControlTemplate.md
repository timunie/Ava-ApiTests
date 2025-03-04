import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FuncControlTemplate Class


A template for a <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class FuncControlTemplate : FuncTemplate<TemplatedControl, Control>, 
	IControlTemplate, ITemplate<TemplatedControl, TemplateResult<Control>>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class FuncControlTemplate
	Inherits FuncTemplate(Of TemplatedControl, Control)
	Implements IControlTemplate, ITemplate(Of TemplatedControl, TemplateResult(Of Control))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FuncControlTemplate = 
    class
        inherit FuncTemplate<TemplatedControl, Control>
        interface IControlTemplate
        interface ITemplate<TemplatedControl, TemplateResult<Control>>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/FuncControlTemplate.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate</a>(<a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>, <a href="T_Avalonia_Controls_Control">Control</a>)  →  FuncControlTemplate</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Templates_FuncControlTemplate_1">Avalonia.Controls.Templates.FuncControlTemplate(T)</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Templates_IControlTemplate">IControlTemplate</a>, <a href="T_Avalonia_Controls_Templates_ITemplate_2">ITemplate</a>(<a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>, TemplateResult(<a href="T_Avalonia_Controls_Control">Control</a>))</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncControlTemplate__ctor">FuncControlTemplate(Func(TemplatedControl, INameScope, Control))</a></td>
<td>Initializes a new instance of the FuncControlTemplate class.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_FuncControlTemplate_Build">Build(TemplatedControl)</a></td>
<td> </td>
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
