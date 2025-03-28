# RegisterDirect&lt;TOwner, TValue&gt; Method


Registers a direct <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static DirectProperty<TOwner, TValue> RegisterDirect<TOwner, TValue>(
	string name,
	Func<TOwner, TValue> getter,
	Action<TOwner, TValue>? setter = null,
	TValue unsetValue = null,
	BindingMode defaultBindingMode = BindingMode.OneWay,
	bool enableDataValidation = false
)
where TOwner : AvaloniaObject

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function RegisterDirect(Of TOwner As AvaloniaObject, TValue) ( 
	name As String,
	getter As Func(Of TOwner, TValue),
	Optional setter As Action(Of TOwner, TValue) = Nothing,
	Optional unsetValue As TValue = Nothing,
	Optional defaultBindingMode As BindingMode = BindingMode.OneWay,
	Optional enableDataValidation As Boolean = false
) As DirectProperty(Of TOwner, TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RegisterDirect : 
        name : string * 
        getter : Func<'TOwner, 'TValue> * 
        ?setter : Action<'TOwner, 'TValue> * 
        ?unsetValue : 'TValue * 
        ?defaultBindingMode : BindingMode * 
        ?enableDataValidation : bool 
(* Defaults:
        let _setter = defaultArg setter null
        let _unsetValue = defaultArg unsetValue null
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.OneWay
        let _enableDataValidation = defaultArg enableDataValidation false
*)
-> DirectProperty<'TOwner, 'TValue>  when 'TOwner : AvaloniaObject
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty.cs#L420" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(TOwner, TValue)</dt><dd>Gets the current value of the property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TOwner, TValue)  (Optional)</dt><dd>Sets the value of the property.</dd><dt>  TValue  (Optional)</dt><dd>The value to use when the property is cleared.</dd><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd>The default binding mode for the property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the property is interested in data validation.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the class that is registering the property.</dd><dt /><dd>The type of the property's value.</dd></dl>

#### Return Value
<a href="T_Avalonia_DirectProperty_2">DirectProperty</a>(TOwner, TValue)  
A <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty(TValue)</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

