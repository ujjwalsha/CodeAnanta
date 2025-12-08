package com.codeananta.CodeAnanta.Utilities;


import lombok.experimental.UtilityClass;

@UtilityClass
public class FileUpload {

    public static final long MAX_FILE_SIZE = 2*1024*1024;

    public static final String IMAGE_PATTERN = "([^\\s]+(\\.(?i)(jpg|png|gif|bmp))$)";

    public static final String DATE_FORMAT = "yyyyMMddHHmmss";

    public static final String FILE_NAME_FORMAT = "%s_%s_%s";
}
