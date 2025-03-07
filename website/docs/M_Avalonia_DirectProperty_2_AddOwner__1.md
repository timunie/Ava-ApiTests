# AddOwner&lt;TNewOwner&gt; Method


Registers the direct property on another type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DirectProperty<TNewOwner, TValue> AddOwner<TNewOwner>(
	Func<TNewOwner, TValue> getter,
	Action<TNewOwner, TValue>? setter = null,
	TValue unsetValue = null,
	BindingMode defaultBindingMode = BindingMode.Default,
	bool enableDataValidation = false
)
where TNewOwner : AvaloniaObject

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function AddOwner(Of TNewOwner As AvaloniaObject) ( 
	getter As Func(Of TNewOwner, TValue),
	Optional setter As Action(Of TNewOwner, TValue) = Nothing,
	Optional unsetValue As TValue = Nothing,
	Optional defaultBindingMode As BindingMode = BindingMode.Default,
	Optional enableDataValidation As Boolean = false
) As DirectProperty(Of TNewOwner, TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AddOwner : 
        getter : Func<'TNewOwner, 'TValue> * 
        ?setter : Action<'TNewOwner, 'TValue> * 
        ?unsetValue : 'TValue * 
        ?defaultBindingMode : BindingMode * 
        ?enableDataValidation : bool 
(* Defaults:
        let _setter = defaultArg setter null
        let _unsetValue = defaultArg unsetValue null
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.Default
        let _enableDataValidation = defaultArg enableDataValidation false
*)
-> DirectProperty<'TNewOwner, 'TValue>  when 'TNewOwner : AvaloniaObject
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/DirectProperty.cs#L88" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(TNewOwner, <a href="T_Avalonia_DirectProperty_2">TValue</a>)</dt><dd>Gets the current value of the property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TNewOwner, <a href="T_Avalonia_DirectProperty_2">TValue</a>)  (Optional)</dt><dd>Sets the value of the property.</dd><dt>  <a href="T_Avalonia_DirectProperty_2">TValue</a>  (Optional)</dt><dd>The value to use when the property is set to <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a></dd><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd>The default binding mode for the property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the property is interested in data validation.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the additional owner.</dd></dl>

#### Return Value
<a href="T_Avalonia_DirectProperty_2">DirectProperty</a>(TNewOwner, <a href="T_Avalonia_DirectProperty_2">TValue</a>)  
The property.

## See Also


#### Reference
<a href="T_Avalonia_DirectProperty_2">DirectProperty(TOwner, TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
