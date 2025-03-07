# InvalidateMeasure Method


Notifies the layout manager that a control requires a measure.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual void InvalidateMeasure(
	Layoutable control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Sub InvalidateMeasure ( 
	control As Layoutable
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract InvalidateMeasure : 
        control : Layoutable -> unit 
override InvalidateMeasure : 
        control : Layoutable -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutManager.cs#L46" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a></dt><dd>The control.</dd></dl>

#### Implements
<a href="M_Avalonia_Layout_ILayoutManager_InvalidateMeasure">ILayoutManager.InvalidateMeasure(Layoutable)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutManager">LayoutManager Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
