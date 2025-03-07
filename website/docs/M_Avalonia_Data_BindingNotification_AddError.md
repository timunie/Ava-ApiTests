# AddError Method


Adds an error to the <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void AddError(
	Exception e,
	BindingErrorType type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub AddError ( 
	e As Exception,
	type As BindingErrorType
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AddError : 
        e : Exception * 
        type : BindingErrorType -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingNotification.cs#L241" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></dt><dd>The error to add.</dd><dt>  <a href="T_Avalonia_Data_BindingErrorType">BindingErrorType</a></dt><dd>The error type.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingNotification">BindingNotification Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
