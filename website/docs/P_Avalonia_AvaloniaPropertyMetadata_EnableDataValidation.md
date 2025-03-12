# EnableDataValidation Property


Gets a value indicating whether the property is interested in data validation.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool? EnableDataValidation { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property EnableDataValidation As Boolean?
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract EnableDataValidation : Nullable<bool> with get
override EnableDataValidation : Nullable<bool> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyMetadata.cs#L47" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)Data validation is validation performed at the target of a binding, for example in a view model using the INotifyDataErrorInfo interface. Only certain properties on a control (such as a TextBox's Text property) will be interested in receiving data validation messages so this feature must be explicitly enabled by setting this flag.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

