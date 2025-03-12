# SetAndRaise&lt;T&gt; Method


Sets the backing field for a direct avalonia property, raising the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event if the value has changed.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected bool SetAndRaise<T>(
	DirectPropertyBase<T> property,
	ref T field,
	T value
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function SetAndRaise(Of T) ( 
	property As DirectPropertyBase(Of T),
	ByRef field As T,
	value As T
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SetAndRaise : 
        property : DirectPropertyBase<'T> * 
        field : 'T byref * 
        value : 'T -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L800" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase</a>(T)</dt><dd>The property.</dd><dt>  T</dt><dd>The backing field.</dd><dt>  T</dt><dd>The value.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the property.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the value changed, otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

