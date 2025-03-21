# ExpressionParseException Constructor


Initializes a new instance of the <a href="T_Avalonia_Data_Core_ExpressionParseException">ExpressionParseException</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ExpressionParseException(
	int column,
	string message,
	Exception? innerException = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	column As Integer,
	message As String,
	Optional innerException As Exception = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        column : int * 
        message : string * 
        ?innerException : Exception 
(* Defaults:
        let _innerException = defaultArg innerException null
*)
-> ExpressionParseException
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/ExpressionParseException.cs#L20" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The column position of the error.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The exception message.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>  (Optional)</dt><dd>The exception that caused the parsing failure.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_ExpressionParseException">ExpressionParseException Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  

