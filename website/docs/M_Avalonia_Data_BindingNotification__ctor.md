# BindingNotification(Exception, BindingErrorType, Object) Constructor


Initializes a new instance of the <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public BindingNotification(
	Exception error,
	BindingErrorType errorType,
	Object? fallbackValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	error As Exception,
	errorType As BindingErrorType,
	fallbackValue As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        error : Exception * 
        errorType : BindingErrorType * 
        fallbackValue : Object -> BindingNotification
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingNotification.cs#L87" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></dt><dd>The binding error.</dd><dt>  <a href="T_Avalonia_Data_BindingErrorType">BindingErrorType</a></dt><dd>The type of the binding error.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The fallback value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingNotification">BindingNotification Class</a>  
<a href="Overload_Avalonia_Data_BindingNotification__ctor">BindingNotification Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

