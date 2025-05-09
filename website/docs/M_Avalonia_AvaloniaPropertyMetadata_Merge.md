# Merge Method


Merges the metadata with the base metadata.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual void Merge(
	AvaloniaPropertyMetadata baseMetadata,
	AvaloniaProperty property
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Sub Merge ( 
	baseMetadata As AvaloniaPropertyMetadata,
	property As AvaloniaProperty
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Merge : 
        baseMetadata : AvaloniaPropertyMetadata * 
        property : AvaloniaProperty -> unit 
override Merge : 
        baseMetadata : AvaloniaPropertyMetadata * 
        property : AvaloniaProperty -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyMetadata.cs#L63" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a></dt><dd>The base metadata to merge.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property to which the metadata is being applied.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

