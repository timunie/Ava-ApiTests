# GetValue&lt;T&gt;(DirectPropertyBase&lt;T&gt;) Method


Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public T GetValue<T>(
	DirectPropertyBase<T> property
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetValue(Of T) ( 
	property As DirectPropertyBase(Of T)
) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetValue : 
        property : DirectPropertyBase<'T> -> 'T 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L247" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase</a>(T)</dt><dd>The property.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the property.</dd></dl>

#### Return Value
T  
The value.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_GetValue">GetValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
