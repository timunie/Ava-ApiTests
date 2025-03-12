# OverrideMetadata&lt;T&gt;(DirectPropertyMetadata&lt;TValue&gt;) Method


Overrides the metadata for the property on the specified type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void OverrideMetadata<T>(
	DirectPropertyMetadata<TValue> metadata
)
where T : AvaloniaObject

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub OverrideMetadata(Of T As AvaloniaObject) ( 
	metadata As DirectPropertyMetadata(Of TValue)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member OverrideMetadata : 
        metadata : DirectPropertyMetadata<'TValue> -> unit  when 'T : AvaloniaObject
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/DirectPropertyBase.cs#L116" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_DirectPropertyMetadata_1">DirectPropertyMetadata</a>(<a href="T_Avalonia_DirectPropertyBase_1">TValue</a>)</dt><dd>The metadata.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue) Class</a>  
<a href="Overload_Avalonia_DirectPropertyBase_1_OverrideMetadata">OverrideMetadata Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

