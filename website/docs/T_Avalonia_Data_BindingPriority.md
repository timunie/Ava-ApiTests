# BindingPriority Enumeration


The priority of a value or binding.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum BindingPriority
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration BindingPriority
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type BindingPriority
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingPriority.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>LocalValue</td>
<td>0</td>
<td>A local value.</td>
</tr>
<tr>
<td>StyleTrigger</td>
<td>1</td>
<td>A triggered style value.</td>
</tr>
<tr>
<td>Template</td>
<td>2</td>
<td>A value from the control's template.</td>
</tr>
<tr>
<td>Style</td>
<td>3</td>
<td>A style value.</td>
</tr>
<tr>
<td>Inherited</td>
<td>4</td>
<td>The value is inherited from an ancestor element.</td>
</tr>
<tr>
<td>Animation</td>
<td>-1</td>
<td>A value that comes from an animation.</td>
</tr>
<tr>
<td>Unset</td>
<td>2,147,483,647</td>
<td>The value is uninitialized.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

