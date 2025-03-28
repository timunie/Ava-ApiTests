# Build(Object, Control) Method


Creates or recycles a control to display the specified data.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Control? Build(
	Object? data,
	Control? existing
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Build ( 
	data As Object,
	existing As Control
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Build : 
        data : Object * 
        existing : Control -> Control 
override Build : 
        data : Object * 
        existing : Control -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncDataTemplate.cs#L125" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The data to display.</dd><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>An optional control to recycle.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The *existing* control if supplied and applicable to *data*, otherwise a new control or null.

#### Implements
<a href="M_Avalonia_Controls_Templates_IRecyclingDataTemplate_Build">IRecyclingDataTemplate.Build(Object, Control)</a>  


## Remarks
The caller should ensure that any control passed to *existing* originated from the same data template.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncDataTemplate_Build">Build Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

