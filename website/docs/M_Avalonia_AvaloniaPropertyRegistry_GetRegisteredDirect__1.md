# GetRegisteredDirect&lt;T&gt;(AvaloniaObject, DirectPropertyBase&lt;T&gt;) Method


Gets a direct property as registered on an object.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DirectPropertyBase<T> GetRegisteredDirect<T>(
	AvaloniaObject o,
	DirectPropertyBase<T> property
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetRegisteredDirect(Of T) ( 
	o As AvaloniaObject,
	property As DirectPropertyBase(Of T)
) As DirectPropertyBase(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetRegisteredDirect : 
        o : AvaloniaObject * 
        property : DirectPropertyBase<'T> -> DirectPropertyBase<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyRegistry.cs#L259" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase</a>(T)</dt><dd>The direct property.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase</a>(T)  
The registered.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyRegistry">AvaloniaPropertyRegistry Class</a>  
<a href="Overload_Avalonia_AvaloniaPropertyRegistry_GetRegisteredDirect">GetRegisteredDirect Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
