# AffectsMeasure&lt;T&gt; Method


Marks a property as affecting the control's measurement.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsMeasure<T>(
	params AvaloniaProperty[] properties
)
where T : Layoutable

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsMeasure(Of T As Layoutable) ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsMeasure : 
        properties : AvaloniaProperty[] -> unit  when 'T : Layoutable
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/Layoutable.cs#L490" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The control which the property affects.</dd></dl>

## Remarks
After a call to this method in a control's static constructor, any change to the property will cause <a href="M_Avalonia_Layout_Layoutable_InvalidateMeasure">InvalidateMeasure()</a> to be called on the element.

## See Also


#### Reference
<a href="T_Avalonia_Layout_Layoutable">Layoutable Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

