# AddOwner&lt;TOwner&gt; Method


Attaches the property as a non-attached property on the specified type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AttachedProperty<TValue> AddOwner<TOwner>(
	StyledPropertyMetadata<TValue>? metadata = null
)
where TOwner : AvaloniaObject

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function AddOwner(Of TOwner As AvaloniaObject) ( 
	Optional metadata As StyledPropertyMetadata(Of TValue) = Nothing
) As AttachedProperty(Of TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AddOwner : 
        ?metadata : StyledPropertyMetadata<'TValue> 
(* Defaults:
        let _metadata = defaultArg metadata null
*)
-> AttachedProperty<'TValue>  when 'TOwner : AvaloniaObject
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AttachedProperty.cs#L39" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata</a>(<a href="T_Avalonia_AttachedProperty_1">TValue</a>)  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd>The owner type.</dd></dl>

#### Return Value
<a href="T_Avalonia_AttachedProperty_1">AttachedProperty</a>(<a href="T_Avalonia_AttachedProperty_1">TValue</a>)  
The property.

## See Also


#### Reference
<a href="T_Avalonia_AttachedProperty_1">AttachedProperty(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

